import os
import shutil
from uuid import uuid4

from bson import ObjectId

from app.ai.gemini import ask_gemini
from app.database import (
    applications_collection,
    jobs_collection,
)
from app.services.gemini_resume_service import parse_resume
from app.services.pdf_service import PDFService

UPLOAD_DIR = "app/uploads/resume"

os.makedirs(UPLOAD_DIR, exist_ok=True)


# -----------------------------
# Save Resume
# -----------------------------
async def save_resume(file):

    extension = file.filename.split(".")[-1]

    filename = f"{uuid4()}.{extension}"

    filepath = os.path.join(UPLOAD_DIR, filename)

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": filename,
        "filepath": filepath
    }


# -----------------------------
# Upload + Parse Resume
# -----------------------------
async def process_resume(file):

    saved_resume = await save_resume(file)

    resume_text = PDFService.extract_text(
        saved_resume["filepath"]
    )

    candidate = parse_resume(resume_text)

    candidate["resume_path"] = saved_resume["filepath"]
    candidate["status"] = "Applied"

    result = applications_collection.insert_one(candidate)

    candidate["_id"] = str(result.inserted_id)

    return candidate


# -----------------------------
# Resume Score
# -----------------------------
def score_resume(application_id: str, job_id: str):

    application = applications_collection.find_one(
        {
            "_id": ObjectId(application_id)
        }
    )

    if not application:
        return {
            "success": False,
            "message": "Application not found"
        }

    job = jobs_collection.find_one(
        {
            "_id": ObjectId(job_id)
        }
    )

    if not job:
        return {
            "success": False,
            "message": "Job not found"
        }

    prompt = f"""
You are an HR Recruiter.

Evaluate the candidate.

Job Description:
{job.get("description", "")}

Candidate Skills:
{application.get("skills", [])}

Education:
{application.get("education", [])}

Experience:
{application.get("experience", [])}

Return JSON like:

{{
    "score": 90,
    "strengths": [
        "...",
        "..."
    ],
    "weaknesses": [
        "...",
        "..."
    ],
    "recommendation":"Shortlist"
}}
"""

    result = ask_gemini(prompt)

    applications_collection.update_one(
        {
            "_id": ObjectId(application_id)
        },
        {
            "$set": {
                "resume_score": result
            }
        }
    )

    return {
        "success": True,
        "resume_score": result
    }