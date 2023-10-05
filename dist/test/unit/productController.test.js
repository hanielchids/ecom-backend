"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const productController_1 = __importDefault(require("../../controllers/productController"));
describe("ProductController", () => {
    describe("createProduct", () => {
        it("should create a new product", () => {
            const req = {
                body: {
                    name: "Test Product",
                    description: "Test Description",
                    price: 99.99,
                },
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
            productController_1.default.createProduct(req, res);
        });
    });
});
