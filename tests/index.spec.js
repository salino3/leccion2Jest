const app = require("../src/app");
const request = require("supertest");

describe("GET /tasks", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
    console.log(response);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /tasks", () => {
  const newTask = {
    title: "Test task",
    description: "Test desc",
  };

  //*
  describe("given a title and description", () => {
    test("should respond with a 200 staus code", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.statusCode).toBe(200);
    });

    test("should have a content-type: application/json in header", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    test("should respond with a task ID", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.body.id).toBeDefined();
    });
  });

  //*
  describe("when title and description is missing", () => {
    test("should respond with 400 status code", async () => {
      const response = await request(app).post("/tasks").send({});
      expect(response.statusCode).toBe(500);
    });

    test("should respond with 400 status code", async () => {
      const fields = [
        {},
        { title: "Test Task" },
        { description: "Test Description" },
      ];
      for (const body of fields) {
        const response = await request(app).post("/tasks").send(body);
        expect(response.statusCode).toBe(500);
      }
    });
  });
});
