from fastapi import APIRouter

router = APIRouter(prefix="/jobs", tags=["Jobs"])


@router.get("/")
async def get_jobs():
    pass


@router.get("/{job_id}")
async def get_job(job_id: str):
    pass