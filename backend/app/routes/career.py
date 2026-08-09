from fastapi import APIRouter, UploadFile, File, Form
from pydantic import BaseModel
import traceback
import os

# ✅ RESEND
import resend
from app.config import RESEND_API_KEY

# ✅ EMAIL SERVICE
from app.services.email_service import send_resume_email

# ✅ SERVICES
from app.services.career_service import (
    get_jobs,
    apply_job,
    get_application,
    save_candidate_details,
)

# ======================================
# ROUTER
# ======================================

router = APIRouter(
    prefix="/career",
    tags=["Careers"],
)

# ======================================
# RESEND CONFIG
# ======================================

resend.api_key = RESEND_API_KEY

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
# GET JOBS
# ======================================

@router.get("/jobs")
def career_jobs():
    try:
        print("📡 Fetching jobs...")
        return get_jobs()
    except Exception as e:
        print("❌ Jobs Error:", str(e))
        traceback.print_exc()
        return {"success": False}

# ======================================
# APPLY
# ======================================

@router.post("/apply")
def apply(request: ApplyRequest):
    try:
        result = apply_job(request.model_dump())
        return {"success": True, "data": result}
    except Exception as e:
        print("❌ Apply Error:", str(e))
        return {"success": False}

# ======================================
# SAVE DETAILS
# ======================================

@router.post("/details")
def save_details(request: CandidateRequest):
    try:
        print("📩 Candidate Data:", request)

        candidate_id = save_candidate_details(request.model_dump())

        return {
            "success": True,
            "candidate_id": candidate_id,
        }

    except Exception as e:
        print("❌ Career Details Error:", str(e))
        return {"success": False}

# ======================================
# UPLOAD RESUME + EMAIL
# ======================================

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload-resume")
async def upload_candidate_resume(
    email: str = Form(...),
    name: str = Form(...),
    mobile: str = Form(...),
    role: str = Form(...),
    experience: str = Form(...),
    resume: UploadFile = File(...),
):
    try:
        print("🔥 Upload API HIT")

        # Save file
        file_path = os.path.join(UPLOAD_DIR, resume.filename)

        with open(file_path, "wb") as f:
            content = await resume.read()
            f.write(content)

        print("✅ File Saved:", file_path)

        # ✅ SEND EMAIL (CORRECT FUNCTION)
        send_resume_email(
            to_email="aigonicinnovpvtltd@gmail.com",
            file_path=file_path,
            candidate={
                "name": name,
                "email": email,
                "mobile": mobile,
                "role": role,
                "experience": experience,
            }
        )

        return {
            "success": True,
            "message": "Resume uploaded & email sent ✅"
        }

    except Exception as e:
        print("❌ Upload Error:", str(e))
        traceback.print_exc()

        return {
            "success": False,
            "message": "Upload failed"
        }

# ======================================
# GET APPLICATION
# ======================================

@router.get("/application/{application_id}")
def application(application_id: str):
    try:
        data = get_application(application_id)

        if data is None:
            return {"success": False}

        return {"success": True, "data": data}

    except Exception as e:
        print("❌ Application Error:", str(e))
        return {"success": False}