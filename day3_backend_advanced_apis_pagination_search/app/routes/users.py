from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas

router = APIRouter(prefix="/users", tags=["Users"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def list_users(
    page: int = Query(1, ge=1),
    limit: int = Query(5, le=50),
    q: str | None = None,
    db: Session = Depends(get_db)
):
    query = db.query(models.User)

    if q:
        query = query.filter(models.User.name.ilike(f"%{q}%"))

    total = query.count()
    users = query.offset((page - 1) * limit).limit(limit).all()

    # ✅ Convert ORM objects to Pydantic
    users_data = [schemas.UserOut.model_validate(u) for u in users]

    return {
        "page": page,
        "limit": limit,
        "total": total,
        "users": users_data
    }
