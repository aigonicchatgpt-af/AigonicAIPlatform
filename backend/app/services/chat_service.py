from datetime import datetime
from pathlib import Path

from app.database import chat_collection
from app.rag.retriever import search

from app.services.memory_service import (
    save_message,
    get_chat_history,
)

from app.services.intent_service import detect_intent


# ==========================================
# LOAD SYSTEM PROMPT
# ==========================================

def load_system_prompt():

    prompt_file = Path("app/prompts/system_prompt.txt")

    if prompt_file.exists():
        return prompt_file.read_text(encoding="utf-8")

    return ""


# ==========================================
# BUILD CHAT HISTORY
# ==========================================

def build_history(history):

    conversation = ""

    for msg in history:

        role = "User" if msg["role"] == "user" else "Assistant"

        conversation += f"{role}: {msg['message']}\n"

    return conversation


# ==========================================
# MAIN CHAT
# ==========================================

def chat(message: str, session_id: str = "default"):

    intent = detect_intent(message)

    if intent == "career":
        return """
👋 Welcome to AIGONIC Careers!

Please provide your details:

Name :
Email :
Mobile :
Experience :
Role :
"""

    if intent == "service":
        return """
👋 Welcome to AIGONIC Services!

Please provide your details:

Name :
Company :
Email :
Mobile :
Service :
Requirement :
Budget :
"""

    history = get_chat_history(session_id)

    history_text = build_history(history)

    try:
        context = search(message)
    except Exception:
        context = ""

    system_prompt = load_system_prompt()

    prompt = f"""
{system_prompt}

Conversation History:
{history_text}

Knowledge Base:
{context}

User:
{message}
"""

    # ==========================================
    # TEMPORARY TEST (Gemini disabled)
    # ==========================================

    reply = "Hello from AIGONIC Backend ✅"

    save_message(session_id, "user", message)
    save_message(session_id, "assistant", reply)

    chat_collection.insert_one(
        {
            "session_id": session_id,
            "user_message": message,
            "bot_reply": reply,
            "intent": intent,
            "created_at": datetime.utcnow(),
        }
    )

    return reply