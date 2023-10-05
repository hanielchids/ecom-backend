"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordersController_1 = __importDefault(require("../controllers/ordersController"));
const router = express_1.default.Router();
router.post("/", ordersController_1.default.createOrders);
router.get("/", ordersController_1.default.getOrders);
exports.default = router;
