from fastapi import APIRouter
from passlib.context import CryptContext
from app.database import cursor, conn
from app.schemas import UserCreate

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

@router.post("/register")
def register_user(user: UserCreate):
    hashed_pwd = hash_password(user.password)

    query = """
    INSERT INTO users (name, email, password)
    VALUES (%s, %s, %s)
    RETURNING id, name, email;
    """
    cursor.execute(query, (user.name, user.email, hashed_pwd))
    conn.commit()

    new_user = cursor.fetchone()

    return {
        "id": new_user[0],
        "name": new_user[1],
        "email": new_user[2]
    }

@router.get("/users")
def get_users():
    cursor.execute("SELECT id, name, email FROM users")
    users = cursor.fetchall()

    return [
        {"id": u[0], "name": u[1], "email": u[2]}
        for u in users
    ]
