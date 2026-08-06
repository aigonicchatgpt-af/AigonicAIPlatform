import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from app.config import SMTP_EMAIL, SMTP_PASSWORD


def send_otp_email(receiver_email: str, otp: str):

    subject = "AIGONIC AI - Email Verification OTP"

    body = f"""
Hello,

Your OTP is

{otp}

This OTP is valid for 5 minutes.

Do not share this OTP.

Regards,
AIGONIC AI
"""

    message = MIMEMultipart()

    message["From"] = SMTP_EMAIL
    message["To"] = receiver_email
    message["Subject"] = subject

    message.attach(
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
            receiver_email,
            message.as_string()
        )

        server.quit()

        print("Email Sent Successfully")

    except Exception as e:

        print("SMTP ERROR :", str(e))
        raise