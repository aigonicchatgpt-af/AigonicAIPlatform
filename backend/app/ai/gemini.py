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
    raise ValueError("❌ GOOGLE_API_KEY not found in .env")

print("✅ Gemini API Key Loaded Successfully")

# ==========================================
# Gemini Client
# ==========================================

client = genai.Client(api_key=API_KEY)

# ==========================================
# Available Models
# ==========================================

MODELS = [
    "models/gemini-3.6-flash",
    "models/gemini-3.5-flash",
    "models/gemini-flash-latest",
    "models/gemini-3.5-flash-lite",
    "models/gemini-2.0-flash",
]

# ==========================================
# Ask Gemini
# ==========================================

def ask_gemini(prompt: str) -> str:

    last_error = None

    for model in MODELS:

        try:

            print("\n" + "=" * 70)
            print(f"🤖 Trying Gemini Model : {model}")
            print("=" * 70)

            response = client.models.generate_content(
                model=model,
                contents=prompt,
            )

            if response.text:
                print(f"✅ Response received from {model}")
                return response.text.strip()

            print(f"⚠ Empty response from {model}")

        except Exception as e:

            print(f"\n❌ {model} Failed")
            traceback.print_exc()

            last_error = e

            continue

    print("\n" + "=" * 70)
    print("❌ ALL GEMINI MODELS FAILED")
    print("=" * 70)

    if last_error:
        print(last_error)

    return (
        "⚠️ AIGONIC AI is temporarily unavailable.\n\n"
        "Please try again later."
    )