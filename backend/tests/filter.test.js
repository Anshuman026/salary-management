const request = require("supertest");
const app = require("../index");

describe("Search and Filter Tests", () => {
  it("should filter by country", async () => {
    const res = await request(app).get("/employees?country=India");

    expect(res.statusCode).toBe(200);
  });

  it("should filter by job", async () => {
    const res = await request(app).get("/employees?job=Engineer");

    expect(res.statusCode).toBe(200);
  });

  it("should search by name", async () => {
    const res = await request(app).get("/employees?search=User");

    expect(res.statusCode).toBe(200);
  });
});