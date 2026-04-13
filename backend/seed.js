const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jobs = ["Engineer", "Manager", "HR", "Analyst"];
const countries = ["India", "USA", "UK"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
  const data = [];

  for (let i = 0; i < 10000; i++) {
    data.push({
      fullName: `User ${i}`,
      jobTitle: random(jobs),
      country: random(countries),
      salary: Math.floor(Math.random() * 100000),
      department: "IT",
    });
  }

  await prisma.employee.createMany({ data });

  console.log("Seeded 10,000 employees");
}

main();