import express, { Router } from "express";
import ordersController from "../controllers/ordersController";

const router: Router = express.Router();

router.post("/", ordersController.createOrders);

router.get("/", ordersController.getOrders);

export default router;
