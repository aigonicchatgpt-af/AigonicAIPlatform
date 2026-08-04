from fastapi import APIRouter
from pydantic import BaseModel

from app.services.chat_service import chat

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


class ChatRequest(BaseModel):
    message: str
    session_id: str


@router.post("/message")
async def chat_message(data: ChatRequest):

    reply = chat(
        message=data.message,
        session_id=data.session_id,
    )

    return {
        "success": True,
        "reply": reply,
        "session_id": data.session_id,
    }