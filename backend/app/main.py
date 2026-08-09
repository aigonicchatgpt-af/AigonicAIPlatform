from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.chat import router as chat_router

app = FastAPI(
    title="AIGONIC AI API",
    version="1.0.0"
)

# ✅ CORS (FINAL WORKING)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://aigonic-ai-platform.vercel.app",
        "https://aigonic-ai-platform-git-main-aigonichatgpt-afs-projects.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to AIGONIC AI Backend 🚀"}

# ✅ ROUTES
app.include_router(chat_router)