from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))

db = client["aira_db"]

collection = db["chat_memory"]


# ==========================================
# SAVE MESSAGE
# ==========================================

def save_message(session_id: str, role: str, message: str):

    collection.insert_one(
        {
            "session_id": session_id,
            "role": role,
            "message": message,
        }
    )


# ==========================================
# CHAT HISTORY (For chat_service.py)
# ==========================================

def get_chat_history(session_id: str, limit: int = 10):

    docs = list(
        collection.find(
            {
                "session_id": session_id
            }
        ).sort("_id", 1)
    )

    history = []

    for doc in docs:
        history.append(
            {
                "role": doc["role"].lower(),
                "message": doc["message"],
            }
        )

    return history


# ==========================================
# STRING HISTORY (Backward Compatibility)
# ==========================================

def get_history(session_id: str, limit: int = 10):

    docs = list(
        collection.find(
            {
                "session_id": session_id
            }
        ).sort("_id", 1)
    )

    history = ""

    for doc in docs:
        history += f"{doc['role']}: {doc['message']}\n"

    return history