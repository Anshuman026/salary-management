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

##  Setup Instructions

### Backend
cd backend
npm install
npx prisma generate
npx prisma migrate dev
node seed.js
npx nodemon index.js

### Frontend
cd frontend
npm install
npm run dev

## Seed Data
Run:
node seed.js

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
