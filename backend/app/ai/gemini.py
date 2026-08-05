import os
import traceback

from dotenv import load_dotenv
from google import genai

# ==========================================
# Load Environment Variables
# ==========================================

load_dotenv()

API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    raise ValueError(" GOOGLE_API_KEY not found in .env")

print("✅ Gemini API Key Loaded Successfully")

# ==========================================
# Gemini Client
# ==========================================

client = genai.Client(api_key=API_KEY)

# ==========================================
# Ask Gemini
# ==========================================

def ask_gemini(prompt: str) -> str:

    try:

        print("\n" + "=" * 70)
        print("🤖 Calling Gemini 2.5 Flash")
        print("=" * 70)

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        if response.text:
            print("✅ Gemini Response Received")
            return response.text.strip()

        return " Gemini returned an empty response."

    except Exception:

        print("\n Gemini Error")
        traceback.print_exc()

        return (
            " AIGONIC AI is temporarily unavailable.\n"
            "Please try again later."
        )