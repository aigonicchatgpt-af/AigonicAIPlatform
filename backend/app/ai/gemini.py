import os
import traceback
from dotenv import load_dotenv
from google import genai

# Load env
load_dotenv()

API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    raise ValueError("❌ GOOGLE_API_KEY not found")

print("✅ Gemini API Key Loaded")

# Gemini client
client = genai.Client(api_key=API_KEY)

# Ask Gemini
def ask_gemini(prompt: str) -> str:
    try:
        print("\n" + "=" * 50)
        print("🤖 Calling Gemini")
        print("=" * 50)

        response = client.models.generate_content(
            model="gemini-1.5-flash",   # ✅ WORKING MODEL
            contents=prompt,
        )

        if response and response.text:
            print("✅ Response received")
            return response.text.strip()

        return "⚠️ Empty response from AI"

    except Exception as e:
        print("❌ Gemini Error:", str(e))
        traceback.print_exc()

        return "🚫 AI is temporarily unavailable"