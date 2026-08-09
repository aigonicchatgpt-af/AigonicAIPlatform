import os
import traceback
from dotenv import load_dotenv
from google import genai

# =====================================
# LOAD ENV VARIABLES
# =====================================

load_dotenv()

API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    raise ValueError("❌ GOOGLE_API_KEY not found")

print("✅ Gemini API Key Loaded")

# =====================================
# GEMINI CLIENT SETUP
# =====================================

client = genai.Client(api_key=API_KEY)

# =====================================
# ASK GEMINI FUNCTION
# =====================================

def ask_gemini(prompt: str) -> str:
    try:
        print("\n" + "=" * 50)
        print("🤖 Calling Gemini AI")
        print("=" * 50)

        response = client.models.generate_content(
            model="gemini-1.5-flash-latest",   # ✅ LATEST WORKING MODEL
            contents=prompt,
            config={
                "temperature": 0.7,          # creativity
                "max_output_tokens": 1024,   # response size
            }
        )

        # ✅ SAFE RESPONSE HANDLING
        if response and hasattr(response, "text") and response.text:
            print("✅ Response received")
            return response.text.strip()

        return "⚠️ Empty response from AI"

    except Exception as e:
        print("❌ Gemini Error:", str(e))
        traceback.print_exc()

        return "🚫 AI is temporarily unavailable"