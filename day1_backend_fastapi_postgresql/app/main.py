from fastapi import FastAPI
from app.routes.users import router as user_router

app = FastAPI(title="Day 1 Backend – FastAPI + PostgreSQL")

app.include_router(user_router)

@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}
