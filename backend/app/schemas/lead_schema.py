from datetime import datetime

from app.database import lead_collection


def get_services():
    return {
        "services": [
            "AI Chatbot Development",
            "AI Agent Development",
            "Web Development",
            "Mobile App Development",
            "AI Automation",
            "Machine Learning Solutions",
            "Data Analytics",
            "Cloud Solutions",
            "UI/UX Design",
            "Digital Marketing"
        ]
    }


def save_lead(data: dict):
    try:
        data["created_at"] = datetime.utcnow()

        result = lead_collection.insert_one(data)

        return {
            "success": True,
            "message": "Lead submitted successfully.",
            "lead_id": str(result.inserted_id)
        }

    except Exception as e:
        return {
            "success": False,
            "message": str(e)
        }