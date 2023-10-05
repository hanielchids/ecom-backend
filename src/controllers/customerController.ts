import { Request, Response } from "express";
import Customer from "../models/Customer";
import { database } from "../db";

class CustomerController {
  getAllCustomers(req: Request, res: Response): void {
    res.status(200).json(database.customers);
  }

  createCustomer(req: Request, res: Response): void {
    const customer: Customer = req.body;
    database.customers.push(customer);
    res.status(201).json(customer);
  }

  getCustomerById(req: Request, res: Response): void {
    const customerId: string = req.params.id;
    const customer = database.customers.find((c) => c.id === customerId);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  }

  deleteCustomerById(req: Request, res: Response): void {
    const customerId: string = req.params.id;
    const index = database.customers.findIndex((c) => c.id === customerId);
    if (index !== -1) {
      database.customers.splice(index, 1);
      res.status(200).json({ message: "Customer deleted successfully" });
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  }
}

export default new CustomerController();
