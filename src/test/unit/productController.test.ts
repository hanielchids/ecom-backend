import { expect } from "chai";
import { Request, Response } from "express";
import ProductController from "../../controllers/productController";

describe("ProductController", () => {
  describe("createProduct", () => {
    it("should create a new product", () => {
      const req = {
        body: {
          name: "Test Product",
          description: "Test Description",
          price: 99.99,
        },
      } as Request;

      let responseStatus = 0;
      const res = {
        status(statusCode: number) {
          responseStatus = statusCode;
          return this;
        },
        json(data: any) {
          expect(responseStatus).to.equal(201);
          expect(data).to.deep.equal(req.body);
        },
      } as Response;

      ProductController.createProduct(req, res);
    });
  });
});
