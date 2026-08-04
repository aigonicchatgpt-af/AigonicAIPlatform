from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import db

from app.routes.auth import router as auth_router
from app.routes.chat import router as chat_router
from app.routes import jobs, resume
from app.routes.services import router as services_router
from app.routes.career import router as career_router
from app.routes.contact import router as contact_router

app = FastAPI(
    title="AIGONIC AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to AIGONIC AI Backend"}

app.include_router(auth_router)
app.include_router(chat_router)
app.include_router(career_router)
app.include_router(jobs.router)
app.include_router(resume.router)
app.include_router(services_router)
app.include_router(contact_router)