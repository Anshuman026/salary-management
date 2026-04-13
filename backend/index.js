const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

/* CRUD APIs */

app.get("/employees", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const search = req.query.search || "";
  const country = req.query.country || "";
  const job = req.query.job || "";

  const skip = (page - 1) * limit;

  const where = {
    AND: [
      search
        ? {
            fullName: {
              contains: search,
            },
          }
        : {},
      country ? { country } : {},
      job ? { jobTitle: job } : {},
    ],
  };

  const [data, total] = await Promise.all([
    prisma.employee.findMany({
      where,
      skip,
      take: limit,
    }),
    prisma.employee.count({ where }),
  ]);

  res.json({
    data,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
});

/* Insights */

// Country stats
app.get("/insights/country/:country", async (req, res) => {
  const country = req.params.country;

  const stats = await prisma.employee.aggregate({
    where: { country },
    _avg: { salary: true },
    _min: { salary: true },
    _max: { salary: true },
  });

  res.json(stats);
});

// Job + Country
app.get("/insights/job", async (req, res) => {
  const { country, job } = req.query;

  const stats = await prisma.employee.aggregate({
    where: { country, jobTitle: job },
    _avg: { salary: true },
  });

  res.json(stats);
});

app.listen(5000, () => console.log("Backend running on 5000"));