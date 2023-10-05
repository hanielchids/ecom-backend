import express, { Router } from "express";
import customerController from "../controllers/customerController";

const router: Router = express.Router();

router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.get("/:id", customerController.getCustomerById);
router.delete("/:id", customerController.deleteCustomerById);

export default router;
