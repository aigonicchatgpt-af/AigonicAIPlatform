from app.services.conversation_service import (
    save_conversation,
    clear_conversation,
)


# ==========================================
# START CAREER FLOW
# ==========================================

def start_career_flow(session_id: str):

    save_conversation(
        session_id=session_id,
        flow="career",
        step="details",
        data={}
    )

    return (
        "👋 Welcome to AIGONIC Careers.\n\n"
        "Please provide the following details:\n\n"
        "Name       :\n"
        "Email      :\n"
        "Mobile     :\n"
        "Experience :\n"
        "Role       :"
    )


# ==========================================
# CONTINUE CAREER FLOW
# ==========================================

def continue_career_flow(
    session_id: str,
    conversation: dict,
    message: str
):

    step = conversation.get("step")

    if step == "details":

        clear_conversation(session_id)

        return (
            "✅ Details received successfully.\n\n"
            "📄 Please upload your Resume (PDF).\n\n"
            "Click the Upload Resume button below."
        )

    return (
        "Application completed successfully."
    )