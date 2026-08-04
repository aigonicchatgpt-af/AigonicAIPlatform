def detect_intent(message: str):
    """
    Detect special conversation flows.

    Everything else will be handled by the RAG Knowledge Base.
    """

    message = message.lower().strip()

    # ==========================================
    # Career
    # ==========================================

    career_keywords = [
        "career",
        "job",
        "jobs",
        "vacancy",
        "vacancies",
        "opening",
        "openings",
        "internship",
        "intern",
        "apply",
        "application",
        "resume",
        "cv",
        "hiring",
        "recruitment",
    ]

    if any(keyword in message for keyword in career_keywords):
        return "career"

    # ==========================================
    # Services
    # ==========================================

    service_keywords = [
        "service",
        "services",
        "ai service",
        "ai services",
        "chatbot",
        "automation",
        "agentic ai",
        "machine learning",
        "generative ai",
        "computer vision",
        "nlp",
        "consulting",
        "website",
        "mobile app",
        "web development",
    ]

    if any(keyword in message for keyword in service_keywords):
        return "service"

    # ==========================================
    # General
    # ==========================================

    return "general"