from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient # type: ignore
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models for Powermind Automation
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: str = Field(..., min_length=2, max_length=100)
    phone: Optional[str] = Field(None, max_length=20)
    service: str = Field(..., min_length=5, max_length=100)
    message: str = Field(..., min_length=10, max_length=1000)
    status: str = Field(default="new")  # new, contacted, qualified, converted
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactSubmissionCreate(BaseModel):
    fullName: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: str = Field(..., min_length=2, max_length=100)
    phone: Optional[str] = Field(None, max_length=20)
    service: str = Field(..., min_length=5, max_length=100)
    message: str = Field(..., min_length=10, max_length=1000)

class CompanyStats(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    clients_served: str = "500+"
    productivity_boost: str = "300%"
    avg_implementation_time: str = "7 days"
    client_satisfaction: str = "98%"
    total_automated_tasks: str = "50,000+"
    avg_roi: str = "420%"
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Legacy models for existing functionality
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Validation helpers
def sanitize_phone(phone: str) -> str:
    """Remove non-digit characters from phone numbers"""
    if phone:
        return re.sub(r'[^\d+\-\(\)\s]', '', phone)
    return phone

def validate_service(service: str) -> bool:
    """Validate that service is one of the available options"""
    valid_services = [
        # Accept both singular and plural for backwards compatibility
        "Lead Management Automation",
        "CRM & Pipeline Management", 
        "Email & Outreach Automation",
        "Booking & Appointment Scheduling",
        "Workflow & Task Automation",
        "Analytics & Reporting",
        "Full Automation Suite"
    ]
    return service in valid_services

# Powermind Automation API Routes

@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactSubmissionCreate):
    """Submit contact form for Powermind Automation"""
    try:
        # Validate service selection
        if not validate_service(contact_data.service):
            raise HTTPException(status_code=400, detail="Invalid service selection")
        
        # Sanitize phone number
        sanitized_phone = sanitize_phone(contact_data.phone) if contact_data.phone else None
        
        # Create contact submission object
        submission = ContactSubmission(
            full_name=contact_data.fullName.strip(),
            email=contact_data.email.lower().strip(),
            company=contact_data.company.strip(),
            phone=sanitized_phone,
            service=contact_data.service,
            message=contact_data.message.strip()
        )
        
        # Save to database
        result = await db.contact_submissions.insert_one(submission.dict())
        
        if result.inserted_id:
            logger.info(f"New contact submission from {submission.email} for {submission.company}")
            return {
                "success": True,
                "message": "Thank you! We'll contact you within 24 hours to schedule your free strategy session.",
                "id": submission.id
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact submission")
            
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        if isinstance(e, HTTPException):
            raise e
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/stats")
async def get_company_stats():
    """Get company statistics for display on website"""
    try:
        # Try to get stats from database first
        stats_doc = await db.company_stats.find_one({}, sort=[("updated_at", -1)])
        
        if stats_doc:
            return {
                "clientsServed": stats_doc.get("clients_served", "500+"),
                "productivityBoost": stats_doc.get("productivity_boost", "300%"),
                "avgImplementationTime": stats_doc.get("avg_implementation_time", "7 days"),
                "clientSatisfaction": stats_doc.get("client_satisfaction", "98%"),
                "totalAutomatedTasks": stats_doc.get("total_automated_tasks", "50,000+"),
                "avgROI": stats_doc.get("avg_roi", "420%")
            }
        else:
            # Return default stats if none in database
            default_stats = CompanyStats()
            return {
                "clientsServed": default_stats.clients_served,
                "productivityBoost": default_stats.productivity_boost,
                "avgImplementationTime": default_stats.avg_implementation_time,
                "clientSatisfaction": default_stats.client_satisfaction,
                "totalAutomatedTasks": default_stats.total_automated_tasks,
                "avgROI": default_stats.avg_roi
            }
            
    except Exception as e:
        logger.error(f"Error fetching company stats: {str(e)}")
        # Return default stats on error
        default_stats = CompanyStats()
        return {
            "clientsServed": default_stats.clients_served,
            "productivityBoost": default_stats.productivity_boost,
            "avgImplementationTime": default_stats.avg_implementation_time,
            "clientSatisfaction": default_stats.client_satisfaction,
            "totalAutomatedTasks": default_stats.total_automated_tasks,
            "avgROI": default_stats.avg_roi
        }

@api_router.get("/contact")
async def get_contact_submissions():
    """Get all contact submissions (admin endpoint - future use)"""
    try:
        submissions = await db.contact_submissions.find().sort("created_at", -1).to_list(100)
        # Convert ObjectIds to strings for JSON serialization
        for submission in submissions:
            if '_id' in submission:
                submission['_id'] = str(submission['_id'])
        return {"submissions": submissions, "count": len(submissions)}
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact submissions")

# Legacy API Routes (keep for compatibility)
@api_router.get("/")
async def root():
    return {"message": "Powermind Automation API - Ready to transform your business!"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
