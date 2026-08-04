import json

from app.ai.gemini import ask_gemini


def parse_resume(resume_text: str):

    prompt = f"""
You are an AI Resume Parser.

Extract the resume details.

Return ONLY valid JSON.

{{
    "name": "",
    "email": "",
    "phone": "",
    "skills": [],
    "education": [],
    "experience": []
}}

Resume:
{resume_text}
"""

    response = ask_gemini(prompt)

    try:
        return json.loads(response)
    except Exception:
        return {
            "name": "",
            "email": "",
            "phone": "",
            "skills": [],
            "education": [],
            "experience": []
        }