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
    raise ValueError("❌ GOOGLE_API_KEY not found in environment variables")

print("✅ Gemini API Key Loaded Successfully")

# ==========================================
# Gemini Client
# ==========================================
client = genai.Client(api_key=API_KEY)

# ==========================================
# Ask Gemini Function
# ==========================================
def ask_gemini(prompt: str) -> str:
    try:
        print("\n" + "=" * 70)
        print("🤖 Calling Gemini 1.5 Flash")
        print("=" * 70)

        response = client.models.generate_content(
            model="gemini-1.5-flash",   # ✅ FIXED MODEL
            contents=prompt,
        )

        if response and response.text:
            print("✅ Gemini Response Received")
            return response.text.strip()

        return "⚠️ Gemini returned empty response."

    except Exception as e:
        print("\n❌ Gemini Error:", str(e))
        traceback.print_exc()

        return (
            "🚫 AIGONIC AI is temporarily unavailable.\n"
            "Please try again later."
        )