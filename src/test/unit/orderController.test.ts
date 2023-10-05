import { expect } from "chai";
import { Request, Response } from "express";
import OrdersController from "../../controllers/ordersController";

describe("OrdersController", () => {
  describe("createOrders", () => {
    it("should create multiple orders", () => {
      const req = {
        body: [
          {
            id: "1",
            paid: true,
            customerId: "customer1",
            products: ["product1", "product2"],
            total: 199.99,
          },
          {
            id: "2",
            paid: false,
            customerId: "customer2",
            products: ["product3"],
            total: 49.99,
          },
        ],
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

      OrdersController.createOrders(req, res);
    });
  });

  describe("getOrders", () => {
    it("should get a list of all orders", () => {
      const req = {} as Request;

      const expectedOrders = [
        {
          id: "1",
          paid: true,
          customerId: "customer1",
          products: ["product1", "product2"],
          total: 199.99,
        },
        {
          id: "2",
          paid: false,
          customerId: "customer2",
          products: ["product3"],
          total: 49.99,
        },
      ];

      const res = {
        status(statusCode: number) {
          return this;
        },
        json(data: any) {
          expect(data).to.deep.equal(expectedOrders);
        },
      } as Response;

      OrdersController.getOrders(req, res);
    });
  });
});
