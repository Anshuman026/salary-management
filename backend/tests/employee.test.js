const request = require("supertest");
const app = require("../index");

describe("Employee API Tests", () => {
  it("GET /employees should return data", async () => {
    const res = await request(app).get("/employees");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body).toHaveProperty("total");
  });

  it("GET /employees with pagination", async () => {
    const res = await request(app).get("/employees?page=1&limit=5");

    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeLessThanOrEqual(5);
  });
});