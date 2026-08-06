import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from app.config import SMTP_EMAIL, SMTP_PASSWORD


# =====================================================
# SEND OTP EMAIL
# =====================================================
def send_otp_email(receiver_email: str, otp: str):

    subject = "AIGONIC AI - Email Verification OTP"

    body = f"""
Hello,

Your OTP is:

{otp}

This OTP is valid for 5 minutes.

Do not share this OTP with anyone.

Regards,
AIGONIC AI
"""

    message = MIMEMultipart()

    message["From"] = SMTP_EMAIL
    message["To"] = receiver_email
    message["Subject"] = subject

    message.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()

        server.login(
            SMTP_EMAIL,
            SMTP_PASSWORD
        )

        server.sendmail(
            SMTP_EMAIL,
            receiver_email,
            message.as_string()
        )

        server.quit()

        print("✅ OTP Email Sent Successfully")

    except Exception as e:
        print("❌ SMTP ERROR:", str(e))
        raise


# =====================================================
# SEND CONTACT EMAIL
# =====================================================
def send_contact_email(name: str, email: str, message: str):

    subject = f"New Contact Form Submission - {name}"

    body = f"""
A new contact request has been received.

----------------------------------------

Name:
{name}

Email:
{email}

Message:
{message}

----------------------------------------

This email was sent automatically from the AIGONIC AI website.
"""

    contact_message = MIMEMultipart()

    contact_message["From"] = SMTP_EMAIL
    contact_message["To"] = SMTP_EMAIL
    contact_message["Subject"] = subject

    contact_message.attach(
        MIMEText(body, "plain")
    )

    try:

        server = smtplib.SMTP(
            "smtp.gmail.com",
            587
        )

        server.starttls()

        server.login(
            SMTP_EMAIL,
            SMTP_PASSWORD
        )

        server.sendmail(
            SMTP_EMAIL,
            SMTP_EMAIL,
            contact_message.as_string()
        )

        server.quit()

        print("✅ Contact Email Sent Successfully")

    except Exception as e:

        print("❌ SMTP ERROR:", str(e))
        raise