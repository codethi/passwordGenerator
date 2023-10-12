import supertest from "supertest";
import app from "../src/app";

describe("POST /generate-password", () => {
  it("should generate a new password", async () => {
    const body = { length: 12 };
    const result = await supertest(app).post("/generate-password").send(body);

    expect(result.status).toEqual(201);
  });

  it("should not generate a new password without the length", async () => {
    const body = {};
    const result = await supertest(app).post("/generate-password").send(body);

    expect(result.status).toEqual(422);
  });

  it("should not generate a new password if the length is negative", async () => {
    const body = {length: -1};
    const result = await supertest(app).post("/generate-password").send(body);

    expect(result.status).toEqual(500);
  });

  it("should not generate a new password if length is zero", async () => {
    const body = {length: 0};
    const result = await supertest(app).post("/generate-password").send(body);

    expect(result.status).toEqual(500);
  });

  it("should not generate a new password if the length is greater than 25", async () => {
    const body = {length: 26};
    const result = await supertest(app).post("/generate-password").send(body);

    expect(result.status).toEqual(500);
  });
  
});
