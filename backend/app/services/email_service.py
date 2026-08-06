from resend import Resend

from app.config import RESEND_API_KEY

client = Resend(api_key=RESEND_API_KEY)


# ======================================================
# OTP EMAIL
# ======================================================

def send_otp_email(receiver_email: str, otp: str):

    client.emails.send(
        {
            "from": "AIGONIC AI <onboarding@resend.dev>",
            "to": [receiver_email],
            "subject": "AIGONIC AI - Email Verification OTP",
            "html": f"""
            <div style="font-family:Arial">

                <h2>Email Verification</h2>

                <p>Your OTP is</p>

                <h1>{otp}</h1>

                <p>This OTP is valid for 5 minutes.</p>

                <p>Please do not share this OTP with anyone.</p>

                <br>

                <b>AIGONIC AI</b>

            </div>
            """
        }
    )

    print("✅ OTP Email Sent")


# ======================================================
# CONTACT EMAIL
# ======================================================

def send_contact_email(name, email, message):

    client.emails.send(
        {
            "from": "AIGONIC AI <onboarding@resend.dev>",
            "to": ["aigonicinnovpvtltd@gmail.com"],   # Replace with your email
            "subject": f"Contact Form - {name}",
            "html": f"""
            <h2>New Contact Request</h2>

            <b>Name:</b> {name}<br>

            <b>Email:</b> {email}<br><br>

            <b>Message:</b>

            <p>{message}</p>
            """
        }
    )

    print("✅ Contact Email Sent")