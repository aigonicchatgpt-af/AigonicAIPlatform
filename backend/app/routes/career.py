from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from pydantic import BaseModel
import traceback
import os

from app.services.career_service import (
    get_jobs,
    apply_job,
    get_application,
    save_candidate_details,
)

router = APIRouter(
    prefix="/career",
    tags=["Careers"],
)

# ======================================
# MODELS
# ======================================

class ApplyRequest(BaseModel):
    job_id: str
    name: str
    email: str
    mobile: str


class CandidateRequest(BaseModel):
    name: str
    email: str
    mobile: str
    experience: str
    role: str


# ======================================
# GET AVAILABLE JOBS
# ======================================

@router.get("/jobs")
def career_jobs():
    try:
        print("📡 Fetching jobs...")
        return get_jobs()

    except Exception as e:
        print("❌ Jobs Error:", str(e))
        traceback.print_exc()
        return {
            "success": False,
            "message": "Failed to fetch jobs"
        }


# ======================================
# APPLY FOR JOB
# ======================================

@router.post("/apply")
def apply(request: ApplyRequest):
    try:
        print("📩 Apply request:", request)

        result = apply_job(request.model_dump())

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        print("❌ Apply Error:", str(e))
        traceback.print_exc()
        return {
            "success": False,
            "message": "Failed to apply job"
        }


# ======================================
# SAVE CANDIDATE DETAILS (🔥 IMPORTANT FIX)
# ======================================

@router.post("/details")
def save_details(request: CandidateRequest):
    try:
        print("📩 Candidate Data:", request)

        candidate_id = save_candidate_details(request.model_dump())

        return {
            "success": True,
            "message": "Candidate details saved successfully",
            "candidate_id": candidate_id,
        }

    except Exception as e:
        print("❌ Career Details Error:", str(e))
        traceback.print_exc()

        return {
            "success": False,
            "message": "Unable to save career details. Please try again."
        }


# ======================================
# UPLOAD RESUME
# ======================================

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload-resume")
async def upload_candidate_resume(
    email: str = Form(...),
    resume: UploadFile = File(...),
):
    try:
        print("🔥 Upload API HIT")

        file_path = os.path.join(UPLOAD_DIR, resume.filename)

        with open(file_path, "wb") as f:
            content = await resume.read()
            f.write(content)

        print("✅ File Saved:", file_path)

        return {
            "success": True,
            "message": "Resume uploaded successfully",
            "file": resume.filename,
            "email": email
        }

    except Exception as e:
        print("❌ Upload Error:", str(e))
        traceback.print_exc()

        return {
            "success": False,
            "message": "Resume upload failed"
        }


# ======================================
# GET APPLICATION
# ======================================

@router.get("/application/{application_id}")
def application(application_id: str):
    try:
        print("📡 Fetching application:", application_id)

        data = get_application(application_id)

        if data is None:
            return {
                "success": False,
                "message": "Application not found"
            }

        return {
            "success": True,
            "data": data
        }

    except Exception as e:
        print("❌ Application Error:", str(e))
        traceback.print_exc()

        return {
            "success": False,
            "message": "Failed to fetch application"
        }