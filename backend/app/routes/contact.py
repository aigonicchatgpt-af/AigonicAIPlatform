from fastapi import APIRouter

from app.schemas.contact import ContactRequest
from app.services.email_service import send_contact_email

router = APIRouter(
    prefix="/contact",
    tags=["Contact"]
)


@router.post("/")
async def contact(data: ContactRequest):

    send_contact_email(
        data.name,
        data.email,
        data.message
    )

    return {
        "success": True,
        "message": "Contact message sent successfully"
    }