from fastapi import APIRouter, UploadFile, File, Form
from pydantic import BaseModel
import traceback
import os
import smtplib
from email.message import EmailMessage

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
# ENV EMAIL CONFIG
# ======================================

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

# ======================================
# EMAIL FUNCTION (FINAL)
# ======================================

def send_email_with_resume(to_email, file_path, candidate):
    try:
        print("📤 Email sending started...")

        msg = EmailMessage()
        msg["Subject"] = "🚀 New Candidate Application"
        msg["From"] = EMAIL_USER
        msg["To"] = to_email

        msg.set_content(f"""
New Candidate Applied:

Name: {candidate['name']}
Email: {candidate['email']}
Mobile: {candidate['mobile']}
Role: {candidate['role']}
Experience: {candidate['experience']}
""")

        # Attach resume
        with open(file_path, "rb") as f:
            file_data = f.read()
            file_name = os.path.basename(file_path)

        msg.add_attachment(
            file_data,
            maintype="application",
            subtype="pdf",
            filename=file_name
        )

        # Send email
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(msg)

        print("📧 Email sent successfully ✅")

    except Exception as e:
        print("❌ Email Error:", str(e))
        traceback.print_exc()


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
# UPLOAD RESUME + EMAIL (FINAL FIX)
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

        file_path = os.path.join(UPLOAD_DIR, resume.filename)

        with open(file_path, "wb") as f:
            content = await resume.read()
            f.write(content)

        print("✅ File Saved:", file_path)

        # ✅ DIRECT EMAIL CALL (NO THREAD)
        send_email_with_resume(
            to_email="aigonicinnovpvtltd@gmail.com",  # 👉 change if needed
            file_path=file_path,
            candidate={
                "name": name,
                "email": email,
                "mobile": mobile,
                "role": role,
                "experience": experience,
            },
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