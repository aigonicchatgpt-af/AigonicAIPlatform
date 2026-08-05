from datetime import datetime
from pathlib import Path

from app.ai.gemini import ask_gemini
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

    # =====================================
    # Intent Detection
    # =====================================

    intent = detect_intent(message)

    # =====================================
    # Career Form
    # =====================================

    if intent == "career":

        return """
👋 Welcome to AIGONIC Careers!

Please provide your details in the following format:

 Name :
 Email :
 Mobile :
 Experience :
 Role :
"""

    # =====================================
    # Service Form
    # =====================================

    if intent == "service":

        return """
👋 Welcome to AIGONIC Services!

Please provide your details in the following format:

 Name :
 Company :
 Email :
 Mobile :
 Service :
 Requirement :
 Budget :
"""

    # =====================================
    # Load Chat History
    # =====================================

    history = get_chat_history(session_id)

    history_text = build_history(history)

    # =====================================
    # Retrieve Knowledge Base
    # =====================================

    context = ""

    try:

        context = search(message)

        print("\n" + "=" * 80)
        print("USER QUESTION")
        print("=" * 80)
        print(message)

        print("\nKNOWLEDGE BASE CONTEXT")
        print("=" * 80)
        print(context if context else "No context found.")
        print("=" * 80 + "\n")

    except Exception as e:

        print("\nRetriever Error")
        print(e)

        context = ""

    # =====================================
    # Load System Prompt
    # =====================================

    system_prompt = load_system_prompt()

    # =====================================
    # Build Prompt
    # =====================================

    prompt = f"""
{system_prompt}

====================================================
Conversation History
====================================================

{history_text}

====================================================
Knowledge Base
====================================================

{context}

====================================================
Current User Question
====================================================

{message}

====================================================
Instructions
====================================================

You are AIGONIC AI,
the official AI Assistant of
AIGONIC Innovations Pvt. Ltd.

Follow these rules carefully.

1.
Always use the Knowledge Base as your primary source.

2.
If relevant information exists,
answer naturally.

3.
If multiple retrieved paragraphs are related,
combine them into one complete answer.

4.
Never mention internal retrieval,
documents,
context,
or vector database.

5.
Use bullet points whenever appropriate.

6.
Keep answers professional,
friendly,
and concise.

7.
If the question is about:

• Careers
• Jobs
• Internships

the Career Form is already handled separately.

8.
If the question is about:

• AI Services
• Business Consultation
• Company Services

the Service Form is handled separately.

9.
Only reply

"I couldn't find that information in the AIGONIC Knowledge Base."

when absolutely no relevant information exists.

====================================================
Assistant
====================================================
"""

    # =====================================
    # Gemini
    # =====================================

    try:

        reply = ask_gemini(prompt)

    except Exception as e:

        print("\nGemini Error")
        print(e)

        reply = (
            "⚠️ Sorry, AIGONIC AI is temporarily unavailable.\n"
            "Please try again later."
        )

    # =====================================
    # Save Memory
    # =====================================

    save_message(session_id, "user", message)
    save_message(session_id, "assistant", reply)

    # =====================================
    # Save Chat Log
    # =====================================

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