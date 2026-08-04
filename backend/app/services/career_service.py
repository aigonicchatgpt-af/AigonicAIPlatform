import os
import shutil
import smtplib
from email.message import EmailMessage
from datetime import datetime

from bson import ObjectId
from dotenv import load_dotenv

load_dotenv()

from app.database import (
    jobs_collection,
    applications_collection,
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# ==========================================
# GET JOBS
# ==========================================

def get_jobs():

    jobs = []

    for job in jobs_collection.find():

        jobs.append({
            "id": str(job["_id"]),
            "title": job.get("title"),
            "department": job.get("department"),
            "location": job.get("location"),
            "experience": job.get("experience"),
            "description": job.get("description"),
        })

    return jobs


# ==========================================
# APPLY JOB
# ==========================================

def apply_job(data):

    application = {
        "job_id": data["job_id"],
        "name": data["name"],
        "email": data["email"],
        "mobile": data["mobile"],
        "resume_path": "",
        "score": 0,
        "status": "Pending",
        "created_at": datetime.utcnow()
    }

    result = applications_collection.insert_one(application)

    return {
        "success": True,
        "message": "Application submitted successfully.",
        "application_id": str(result.inserted_id)
    }
# ==========================================
# SAVE CANDIDATE DETAILS
# ==========================================

def save_candidate_details(data):

    email = data.get("email", "").strip().lower()

    candidate = {
        "name": data.get("name"),
        "email": email,
        "mobile": data.get("mobile"),
        "experience": data.get("experience"),
        "role": data.get("role"),
        "resume_path": "",
        "status": "Pending",
        "created_at": datetime.utcnow()
    }

    # Update existing candidate instead of inserting duplicates
    applications_collection.update_one(
        {"email": email},
        {"$set": candidate},
        upsert=True
    )

    return email

# ==========================================
# UPLOAD RESUME
# ==========================================

async def upload_resume(email, resume):

    email = email.strip().lower()

    print("Received Email:", email)

    candidate = applications_collection.find_one(
        {"email": email}
    )

    if candidate is None:
        raise Exception(f"Candidate not found for email: {email}")

    extension = os.path.splitext(resume.filename)[1]
    filename = f"{ObjectId()}{extension}"
    file_path = os.path.join(UPLOAD_FOLDER, filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    applications_collection.update_one(
        {"_id": candidate["_id"]},
        {
            "$set": {
                "resume_path": file_path
            }
        }
    )

    send_hr_email(candidate["email"], file_path)

    return {
        "success": True,
        "email": candidate["email"],
        "resume": file_path
    }


# ==========================================
# GET APPLICATION
# ==========================================

def get_application(application_id):

    try:

        application = applications_collection.find_one(
            {
                "_id": ObjectId(application_id)
            }
        )

        if application is None:
            return None

        application["_id"] = str(application["_id"])

        return application

    except Exception as e:
        print("Application Error:", e)
        return None
# ==========================================
# SEND EMAIL TO HR
# ==========================================

def send_hr_email(candidate_email, resume_path):

    # Normalize email
    candidate_email = candidate_email.strip().lower()

    # Find candidate
    candidate = applications_collection.find_one(
        {
            "email": candidate_email
        }
    )

    if candidate is None:
        raise Exception(f"Candidate not found for email: {candidate_email}")

    # Read .env variables
    email_user = os.getenv("EMAIL_USER")
    email_password = os.getenv("EMAIL_PASSWORD")
    hr_email = os.getenv("HR_EMAIL")

    if not email_user:
        raise Exception("EMAIL_USER is not configured.")

    if not email_password:
        raise Exception("EMAIL_PASSWORD is not configured.")

    if not hr_email:
        hr_email = email_user

    # Check resume exists
    if not os.path.exists(resume_path):
        raise Exception(f"Resume file not found: {resume_path}")

    # Create email
    msg = EmailMessage()

    msg["Subject"] = f"New Candidate Application - {candidate.get('role','Candidate')}"
    msg["From"] = email_user
    msg["To"] = hr_email

    msg.set_content(
        f"""
A new candidate has applied.

----------------------------------------
Name       : {candidate.get("name")}
Email      : {candidate.get("email")}
Mobile     : {candidate.get("mobile")}
Experience : {candidate.get("experience")}
Role       : {candidate.get("role")}
Status     : {candidate.get("status")}
----------------------------------------

The candidate's resume is attached.

Regards,
AIGONIC AI Recruitment Bot
"""
    )

    # Attach Resume
    with open(resume_path, "rb") as f:
        msg.add_attachment(
            f.read(),
            maintype="application",
            subtype="pdf",
            filename=os.path.basename(resume_path)
        )

    # Send Email
    try:

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:

            smtp.login(
                email_user,
                email_password
            )

            smtp.send_message(msg)

        print("✅ HR Email sent successfully.")

    except smtplib.SMTPAuthenticationError:
        raise Exception(
            "Gmail authentication failed. Check your Gmail App Password."
        )

    except Exception as e:
        raise Exception(f"Failed to send HR email: {str(e)}")