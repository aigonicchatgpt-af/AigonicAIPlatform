from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.routes.chat import router as chat_router
from app.routes.career import router as career_router

app = FastAPI(
    title="AIGONIC AI API",
    version="1.0.0"
)

# ✅ CORS FIX (IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # 🔥 TEMP (later restrict)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ HANDLE PREFLIGHT (VERY IMPORTANT)
@app.options("/{full_path:path}")
async def preflight_handler(request: Request, full_path: str):
    return JSONResponse(content={"message": "OK"})

@app.get("/")
def home():
    return {"message": "Backend working 🚀"}

# ✅ ROUTES
app.include_router(chat_router)
app.include_router(career_router)