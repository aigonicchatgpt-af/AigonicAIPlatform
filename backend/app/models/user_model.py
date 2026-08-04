from datetime import datetime

def create_user(full_name, email, mobile, password):
    return {
        "full_name": full_name,
        "email": email,
        "mobile": mobile,
        "password": password,
        "verified": False,
        "role": "student",
        "created_at": datetime.utcnow()
    }