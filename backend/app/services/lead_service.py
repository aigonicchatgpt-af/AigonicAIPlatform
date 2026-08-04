from datetime import datetime

from app.database import leads_collection
from app.services.whatsapp_service import send_whatsapp_lead


def get_services():

    return [
        {
            "id": 1,
            "name": "AI Chatbot Development"
        },
        {
            "id": 2,
            "name": "Generative AI Solutions"
        },
        {
            "id": 3,
            "name": "Machine Learning Development"
        },
        {
            "id": 4,
            "name": "AI Automation"
        },
        {
            "id": 5,
            "name": "Data Analytics"
        },
        {
            "id": 6,
            "name": "AI Consulting"
        }
    ]

def save_lead(data):

    print("===== SAVE LEAD =====")
    print(data)

    lead = {
        "name": data["name"],
        "company": data["company"],
        "email": data["email"],
        "mobile": data["mobile"],
        "service": data["service"],
        "requirement": data["requirement"],
        "budget": data["budget"],
        "status": "New",
        "created_at": datetime.utcnow()
    }

    print("Before Mongo")

    result = leads_collection.insert_one(lead)

    print("After Mongo")

    whatsapp_result = send_whatsapp_lead(lead)

    print("WhatsApp:", whatsapp_result)

    return {
        "success": True,
        "lead_id": str(result.inserted_id),
        "whatsapp": whatsapp_result["success"],
        "message": "Lead submitted successfully."
    }