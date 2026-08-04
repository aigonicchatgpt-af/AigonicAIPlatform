from pydantic import BaseModel, EmailStr

class RegisterSchema(BaseModel):
    full_name: str
    email: EmailStr
    mobile: str
    password: str


class LoginSchema(BaseModel):
    email: EmailStr
    password: str


class OTPSchema(BaseModel):
    email: EmailStr
    otp: str


class ForgotPasswordSchema(BaseModel):
    email: EmailStr


class ResetPasswordSchema(BaseModel):
    email: EmailStr
    password: str



class VerifyOTPSchema(BaseModel):
    email: EmailStr
    otp: str