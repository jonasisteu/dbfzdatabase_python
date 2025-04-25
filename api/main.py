from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.characters import router as characters_router

app = FastAPI()

origins = [
    "http://localhost:4200"
]

app.include_router(characters_router, prefix="/characters")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)