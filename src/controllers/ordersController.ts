import { Request, Response } from "express";
import Order from "../models/Order";

class OrdersController {
  private orders: Order[] = [];

  // Create multiple orders
  createOrders(req: Request, res: Response): void {
    const newOrders: Order[] = req.body;

    // Assuming newOrders is an array of Order objects
    for (const order of newOrders) {
      this.orders.push(order);
    }

    res.status(201).json(newOrders);
  }

  // Get a list of all orders
  getOrders(req: Request, res: Response): void {
    res.status(200).json(this.orders);
  }

  // Implement other methods for handling multiple orders
}

export default new OrdersController();
