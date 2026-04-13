 Salary Management System

##  Overview

A full-stack web application to manage employees and analyze salary insights for an organization with 10,000 employees.

This project is designed with a focus on **scalability, performance, and clean architecture**, simulating a real-world production system.

---

## Tech Stack

* **Frontend**: Next.js (App Router)
* **Backend**: Node.js, Express
* **Database**: SQLite (Prisma ORM)
* **Testing**: Jest + Supertest

---

##  Features

###  Employee Management

* View employees
* Server-side pagination (handles 10,000 records efficiently)
* Search employees by name
* Filter by country and job title

###  Salary Insights

* Minimum, maximum, and average salary per country
* Average salary by job title within a country

###  Performance Optimizations

* Server-side pagination for large datasets
* Backend filtering to reduce frontend load
* Efficient database queries using Prisma ORM

---

##  Architecture

Frontend (Next.js) → Backend API (Express) → Database (SQLite)

---

##  How to Run the Project

###  1. Clone the Repository

```bash
git clone https://github.com/Anshuman026/salary-management.git
cd salary-management
```

---

###  2. Backend Setup

```bash
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
```

Backend runs on:

```
http://localhost:5000
```

---

###  3. Frontend Setup

Open a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Start frontend
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

###  4. Verify Application

Open in browser:

```
http://localhost:3000
```

You should see:

* Employee Dashboard
* Pagination working
* Search and filters working

---

##  Running Tests

```bash
cd backend
npm test
```

✔ Includes:

* Employee API tests
* Pagination validation
* Search & filter testing

---

##  Seed Data

To generate 10,000 employees:

```bash
node seed.js
```

---

##  API Endpoints

| Method | Endpoint                   | Description               |
| ------ | -------------------------- | ------------------------- |
| GET    | /employees                 | Get employees (paginated) |
| GET    | /employees?search=         | Search employees          |
| GET    | /employees?country=        | Filter by country         |
| GET    | /employees?job=            | Filter by job             |
| GET    | /insights/country/:country | Salary insights           |

---

##  Design Decisions

* Implemented **server-side pagination** to efficiently handle large datasets
* Used **backend filtering and search** for scalability
* Chose **Prisma ORM** for maintainable and clean database interaction
* Structured backend for testability and modularity

---

##  AI Usage

AI tools (ChatGPT) were used for:

* Backend API design
* Pagination and filtering logic
* Debugging frontend/backend issues
* Improving code structure

All generated code was:

* Reviewed manually
* Tested for correctness
* Adjusted for performance and reliability

---

##  Future Improvements

* Add employee CRUD UI (create/update/delete)
* Add charts dashboard for insights
* Implement authentication and authorization
* Deploy application (AWS / Vercel)

---

##  Notes

* Backend must be running before frontend
* If no data appears, ensure seed script is executed
* Uses local SQLite database for simplicity

---



##  Repository

GitHub: https://github.com/Anshuman026/salary-management

---
