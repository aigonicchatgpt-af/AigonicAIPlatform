from pymongo import MongoClient
from app.config import MONGO_URI, DATABASE_NAME

client = MongoClient(MONGO_URI)

db = client[DATABASE_NAME]

# Authentication
users_collection = db["users"]
otp_collection = db["otp"]

# Chat
chat_collection = db["chat_history"]
memory_collection = db["chat_memory"]

# Careers
jobs_collection = db["jobs"]
applications_collection = db["applications"]

# Services
leads_collection = db["leads"]

print("✅ MongoDB Connected Successfully")