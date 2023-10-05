import express, { Router } from "express";
import productsController from "../controllers/productsController";

const router: Router = express.Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);
router.post("/remove-products", productsController.removeProducts); // Add this line

export default router;
