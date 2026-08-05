from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import traceback

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
    try:
        reply = chat(
            message=data.message,
            session_id=data.session_id,
        )

        return {
            "success": True,
            "reply": reply,
            "session_id": data.session_id,
        }

    except Exception as e:
        print("\n" + "=" * 80)
        print("❌ CHAT API ERROR")
        print("=" * 80)
        traceback.print_exc()
        print("=" * 80 + "\n")

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )