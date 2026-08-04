import requests

from app.config import (
    ULTRAMSG_INSTANCE_ID,
    ULTRAMSG_TOKEN,
    MANAGER_WHATSAPP_NUMBER,
)


def send_whatsapp_lead(lead: dict):

    url = f"https://api.ultramsg.com/{ULTRAMSG_INSTANCE_ID}/messages/chat"

    message = f"""
🚀 NEW SERVICE ENQUIRY

👤 Name: {lead.get('name')}
🏢 Company: {lead.get('company')}
📧 Email: {lead.get('email')}
📱 Mobile: {lead.get('mobile')}

💼 Service:
{lead.get('service')}

📝 Requirement:
{lead.get('requirement')}

💰 Budget:
{lead.get('budget')}
"""

    payload = {
        "token": ULTRAMSG_TOKEN,
        "to": MANAGER_WHATSAPP_NUMBER,
        "body": message.strip(),
    }

    try:
        print("🚀 Sending WhatsApp...")
        print("URL:", url)
        print("Payload:", payload)

        response = requests.post(
            url,
            data=payload,
            timeout=15
        )

        print("Status Code:", response.status_code)
        print("Response:", response.text)

        return {
            "success": response.status_code == 200,
            "response": response.text,
        }

    except Exception as e:
        print("❌ WhatsApp Error:", str(e))

        return {
            "success": False,
            "error": str(e),
        }