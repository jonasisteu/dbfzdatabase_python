from fastapi import APIRouter
from sqlalchemy import Select

from routes import session
from models.character import Character

router = APIRouter()

@router.get("/")
def get_all():
    stmt = Select(Character)
    return session.execute(stmt).scalars().all()

@router.get("/{character_id}")
def get_character_by_id(character_id: int):
    return session.get(Character, character_id)

@router.get("/search/{character_reference}")
def get_character_by_reference(character_reference: str):
    stmt = Select(Character).where(Character.reference == character_reference)
    return session.execute(stmt).scalar()