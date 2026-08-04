from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel

from app.services.resume_service import (
    process_resume,
    score_resume,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


class ResumeScoreRequest(BaseModel):
    application_id: str
    job_id: str


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    return await process_resume(file)


@router.post("/score")
def resume_score(request: ResumeScoreRequest):
    return score_resume(
        application_id=request.application_id,
        job_id=request.job_id,
    )