# Salary Management System

## Overview
A full-stack application to manage employees and analyze salary insights for 10,000 employees.

## Tech Stack
- Backend: Node.js, Express, Prisma
- Frontend: Next.js (App Router)
- Database: SQLite

##  Features
- Employee CRUD
- Pagination (server-side)
- Search & Filter (country, job)
- Salary insights
- 10,000 employee seed script

##  Architecture
Frontend → Backend API → Database

##  How to Run the Project

Follow these steps to run the application locally using VS Code:

---

###  1. Clone the Repository

git clone <your-repo-url>
cd salary-app

---

###  2. Setup Backend

cd backend

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed database with 10,000 employees
node seed.js

# Start backend server
npx nodemon index.js

Backend will run on:
http://localhost:5000

---

###  3. Setup Frontend

Open a new terminal:

cd frontend

# Install dependencies
npm install

# Start frontend
npm run dev

Frontend will run on:
http://localhost:3000

---

###  4. Verify Application

Open browser and go to:
http://localhost:3000

You should see:
- Employee Dashboard
- Pagination working
- Search and filters working

---

###  Notes

- Make sure backend is running before starting frontend
- If data is not visible, ensure seed script has been executed
- Backend runs on port 5000 and frontend on port 3000

---

## API Endpoints
GET /employees
GET /insights/country/:country

##  Design Decisions
- Used pagination for performance
- Server-side filtering for scalability
- Prisma ORM for maintainability

## Future Improvements
- Authentication
- Charts dashboard
- Deployment (AWS/Vercel)
