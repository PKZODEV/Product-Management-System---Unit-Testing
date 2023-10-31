const req = require("supertest");
const assert = require("assert");
const app = require("../server");

describe("get list Products", function () {
  it("should return a list of products", async () => {
    const res = await req(app).get("/products");
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThanOrEqual(0);
  });

  it("should be show just one product get by id", async () => {
    const productId = 2;
    const res = await req(app).get(`/products/${productId}`);
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBe(1);
  });

  it("should not show when return not found", async () => {
    const Id = 20;
    const res = await req(app).get(`/products/${Id}`);
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("error");
  });
});

describe("post /products", () => {
  it("should add product", async () => {
    const addProduct = {
      name: "pen",
      category: "work",
      price: 10,
      stock: 10,
    };
    const res = await req(app).post("/products").send(addProduct);
    expect(res.status).toBe(200);
  });
});

describe("PUT /products/:id", () => {
  it("should update a product", async () => {
    const Id = 14;
    const editProduct = {
      name: "pencil",
      category: "study",
      price: 10,
      stock: 10,
    };
    const res = await req(app).put(`/products/${Id}`).send(editProduct);
    expect(res.status).toBe(200);
  });
});

describe("DELETE /products/:id", () => {
  const Id = 12;
  it("should delete product by id", async () => {
    const res = await req(app).delete(`/products/${Id}`);
    expect(res.status).toBe(200);
  });
});
