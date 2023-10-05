"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ordersController_1 = __importDefault(require("../../controllers/ordersController"));
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
            };
            let responseStatus = 0;
            const res = {
                status(statusCode) {
                    responseStatus = statusCode;
                    return this;
                },
                json(data) {
                    (0, chai_1.expect)(responseStatus).to.equal(201);
                    (0, chai_1.expect)(data).to.deep.equal(req.body);
                },
            };
            ordersController_1.default.createOrders(req, res);
        });
    });
    describe("getOrders", () => {
        it("should get a list of all orders", () => {
            const req = {};
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
                status(statusCode) {
                    return this;
                },
                json(data) {
                    (0, chai_1.expect)(data).to.deep.equal(expectedOrders);
                },
            };
            ordersController_1.default.getOrders(req, res);
        });
    });
});
