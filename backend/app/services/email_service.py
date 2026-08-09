import resend
import base64
import os
from app.config import RESEND_API_KEY

# Set API Key
resend.api_key = RESEND_API_KEY


# ======================================================
# OTP EMAIL
# ======================================================

def send_otp_email(receiver_email: str, otp: str):

    try:

        resend.Emails.send({

            "from": "AIGONIC AI <onboarding@resend.dev>",

            "to": receiver_email,

            "subject": "AIGONIC AI - Email Verification OTP",

            "html": f"""
            <div style="font-family:Arial,sans-serif">

                <h2>AIGONIC AI</h2>

                <p>Your Email Verification OTP is</p>

                <h1 style="letter-spacing:5px;">{otp}</h1>

                <p>This OTP is valid for <b>5 minutes</b>.</p>

                <p>Please do not share this OTP with anyone.</p>

                <br>

                <p>Regards,<br><b>AIGONIC AI Team</b></p>

            </div>
            """

        })

        print("✅ OTP Email Sent Successfully")

    except Exception as e:

        print("❌ RESEND ERROR:", str(e))
        raise


# ======================================================
# CONTACT EMAIL
# ======================================================

def send_contact_email(name: str, email: str, message: str):

    try:

        resend.Emails.send({

            "from": "AIGONIC AI <onboarding@resend.dev>",

            "to": "aigonicinnovpvtltd@gmail.com",

            "subject": f"New Contact Form - {name}",

            "html": f"""
            <div style="font-family:Arial,sans-serif">

                <h2>New Contact Request</h2>

                <p><b>Name:</b> {name}</p>

                <p><b>Email:</b> {email}</p>

                <p><b>Message:</b></p>

                <p>{message}</p>

            </div>
            """

        })

        print("✅ Contact Email Sent Successfully")

    except Exception as e:

        print("❌ RESEND ERROR:", str(e))
        raise
def send_resume_email(to_email, file_path, candidate):
    with open(file_path, "rb") as f:
        file_data = f.read()
        encoded = base64.b64encode(file_data).decode()

    resend.Emails.send({
        "from": "onboarding@resend.dev",
        "to": to_email,
        "subject": "🚀 New Candidate Application",
        "html": f"""
        <h2>Candidate Details</h2>

        <p><b>Name:</b> {candidate['name']}</p>
        <p><b>Email:</b> {candidate['email']}</p>
        <p><b>Mobile:</b> {candidate['mobile']}</p>
        <p><b>Role:</b> {candidate['role']}</p>
        <p><b>Experience:</b> {candidate['experience']}</p>
        """,
        "attachments": [
            {
                "filename": os.path.basename(file_path),
                "content": encoded
            }
        ]
    })