from fastapi import FastAPI
from contextlib import asynccontextmanager

from database import create_db_and_tables
from routers.users import router as users_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    create_db_and_tables()
    print("Application has started")

    yield  # Application runs here

    # Shutdown (optional)
    print("Application shutting down")

app = FastAPI(lifespan=lifespan, title="SmartLearning Backend")

# Routers
app.include_router(users_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the SmartLearning Backend!"}
