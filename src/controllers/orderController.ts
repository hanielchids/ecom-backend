import { Request, Response } from "express";
import { database } from "../db";
import Order from "../models/Order";

class OrderController {
  // Create a new order
  createOrder(req: Request, res: Response): void {
    const orderData: Order = req.body;
    const newOrder: Order = {
      ...orderData,
      id: `${Date.now()}`,
    };
    database.orders.push(newOrder);
    res.status(201).json(newOrder);
  }

  // Get all orders or filter by customer ID or order IDs
  getOrders(req: Request, res: Response): void {
    const { ids, customerId } = req.body;

    if (ids && ids.length > 0) {
      // Filter by order IDs
      const filteredOrders = database.orders.filter((order) =>
        ids.includes(order.id)
      );
      res.json(filteredOrders);
    } else if (customerId) {
      // Filter by customer ID
      const customerOrders = database.orders.filter(
        (order) => order.customerId === customerId
      );
      res.json(customerOrders);
    } else {
      // Get all orders
      res.json(database.orders);
    }
  }

  // Get a single order by ID
  getOrderById(req: Request, res: Response): void {
    const orderId: string = req.params.id;
    const order: Order | undefined = database.orders.find(
      (o) => o.id === orderId
    );
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  }

  // Update an existing order by ID
  updateOrder(req: Request, res: Response): void {
    const orderId: string = req.params.id;
    const updatedOrderData: Order = req.body;
    const orderIndex: number = database.orders.findIndex(
      (o) => o.id === orderId
    );
    if (orderIndex !== -1) {
      database.orders[orderIndex] = {
        ...database.orders[orderIndex],
        ...updatedOrderData,
      };
      res.json(database.orders[orderIndex]);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  }

  // Delete an existing order by ID
  deleteOrder(req: Request, res: Response): void {
    const orderId: string = req.params.id;
    const orderIndex: number = database.orders.findIndex(
      (o) => o.id === orderId
    );
    if (orderIndex !== -1) {
      database.orders.splice(orderIndex, 1);
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  }
}

export default new OrderController();
