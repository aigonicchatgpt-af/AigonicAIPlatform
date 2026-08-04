from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from pydantic import BaseModel
import traceback

from app.services.career_service import (
    get_jobs,
    apply_job,
    get_application,
    save_candidate_details,
    upload_resume,
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
    return get_jobs()


# ======================================
# APPLY FOR JOB
# ======================================

@router.post("/apply")
def apply(request: ApplyRequest):
    try:
        return apply_job(request.model_dump())

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


# ======================================
# SAVE CANDIDATE DETAILS
# ======================================

@router.post("/details")
def save_details(request: CandidateRequest):
    try:
        candidate_id = save_candidate_details(request.model_dump())

        return {
            "success": True,
            "message": "Candidate details saved successfully.",
            "candidate_id": candidate_id,
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


# ======================================
# UPLOAD RESUME
# ======================================

@router.post("/upload-resume")
async def upload_candidate_resume(
    email: str = Form(...),
    resume: UploadFile = File(...),
):
    try:
        result = await upload_resume(email, resume)

        return {
            "success": True,
            "message": "Resume uploaded successfully.",
            "data": result,
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


# ======================================
# GET APPLICATION
# ======================================

@router.get("/application/{application_id}")
def application(application_id: str):

    try:
        data = get_application(application_id)

        if data is None:
            raise HTTPException(
                status_code=404,
                detail="Application not found",
            )

        return data

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )