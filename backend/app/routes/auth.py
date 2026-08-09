from fastapi import APIRouter, HTTPException, Depends

from app.schemas.auth_schema import (
    RegisterSchema,
    LoginSchema,
    ForgotPasswordSchema,
    VerifyOTPSchema
)

from app.database import users_collection, otp_collection
from app.models.user_model import create_user
from app.utils.password import hash_password, verify_password
from app.services.jwt_service import create_access_token
from app.dependencies import get_current_user
from app.utils.otp import generate_otp

# ❌ REMOVE email import for now
# from app.services.email_service import send_otp_email

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

# ==========================
# Register
# ==========================
@router.post("/register")
def register(user: RegisterSchema):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    hashed_password = hash_password(user.password)

    new_user = create_user(
        full_name=user.full_name,
        email=user.email,
        mobile=user.mobile,
        password=hashed_password
    )

    new_user["verified"] = False

    users_collection.insert_one(new_user)

    otp = generate_otp()

    otp_collection.delete_many({"email": user.email})

    otp_collection.insert_one({
        "email": user.email,
        "otp": otp
    })

    # ✅ IMPORTANT FIX (NO EMAIL)
    print(f"✅ OTP for {user.email} is: {otp}")

    return {
        "success": True,
        "message": "Registration successful. Check console for OTP."
    }

# ==========================
# Send OTP
# ==========================
@router.post("/send-otp")
def send_otp(data: ForgotPasswordSchema):

    existing_user = users_collection.find_one(
        {"email": data.email}
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    otp = generate_otp()

    otp_collection.delete_many({"email": data.email})

    otp_collection.insert_one({
        "email": data.email,
        "otp": otp
    })

    print(f"✅ OTP for {data.email} is: {otp}")

    return {
        "success": True,
        "message": "OTP Generated (Check console)"
    }

# ==========================
# Verify OTP
# ==========================
@router.post("/verify-otp")
def verify_otp(data: VerifyOTPSchema):

    otp_data = otp_collection.find_one({
        "email": data.email,
        "otp": data.otp
    })

    if not otp_data:
        raise HTTPException(
            status_code=400,
            detail="Invalid OTP"
        )

    users_collection.update_one(
        {"email": data.email},
        {"$set": {"verified": True}}
    )

    otp_collection.delete_one({"email": data.email})

    return {
        "success": True,
        "message": "Email verified successfully"
    }

# ==========================
# Login
# ==========================
@router.post("/login")
def login(user: LoginSchema):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if not verify_password(
        user.password,
        existing_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    if not existing_user.get("verified", False):
        raise HTTPException(
            status_code=401,
            detail="Please verify your email before logging in."
        )

    token = create_access_token({
        "email": existing_user["email"],
        "role": existing_user["role"]
    })

    return {
        "success": True,
        "message": "Login Successful",
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "full_name": existing_user["full_name"],
            "email": existing_user["email"],
            "role": existing_user["role"]
        }
    }

# ==========================
# Profile
# ==========================
@router.get("/profile")
def profile(current_user=Depends(get_current_user)):

    return {
        "success": True,
        "user": current_user
    }