from fastapi import FastAPI
from app.database import Base, engine
from app.routes import users, auth

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Day 2 Backend – ORM + JWT")

app.include_router(users.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "Day 2 backend running 🚀"}
