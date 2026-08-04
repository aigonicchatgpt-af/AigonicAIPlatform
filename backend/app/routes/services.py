from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

from app.services.lead_service import (
    get_services,
    save_lead,
)

router = APIRouter(
    prefix="/services",
    tags=["Services"]
)


class LeadRequest(BaseModel):
    name: str
    company: str
    email: EmailStr
    mobile: str
    service: str
    requirement: str
    budget: str


@router.get("/list")
def service_list():
    return get_services()


@router.post("/lead")
def create_lead(request: LeadRequest):
    return save_lead(request.model_dump())