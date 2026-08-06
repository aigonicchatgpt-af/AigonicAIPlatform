from dotenv import load_dotenv
import os

load_dotenv()

# MongoDB
MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")

# Gemini
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# JWT
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60)
)

# Email
RESEND_API_KEY = os.getenv("RESEND_API_KEY")

# WhatsApp
ULTRAMSG_INSTANCE_ID = os.getenv("ULTRAMSG_INSTANCE_ID")
ULTRAMSG_TOKEN = os.getenv("ULTRAMSG_TOKEN")
MANAGER_WHATSAPP_NUMBER = os.getenv("MANAGER_WHATSAPP")
