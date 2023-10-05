"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class OrderController {
    // Create a new order
    createOrder(req, res) {
        const orderData = req.body;
        const newOrder = Object.assign(Object.assign({}, orderData), { id: `${Date.now()}` });
        db_1.database.orders.push(newOrder);
        res.status(201).json(newOrder);
    }
    // Get all orders or filter by customer ID or order IDs
    getOrders(req, res) {
        const { ids, customerId } = req.body;
        if (ids && ids.length > 0) {
            // Filter by order IDs
            const filteredOrders = db_1.database.orders.filter((order) => ids.includes(order.id));
            res.json(filteredOrders);
        }
        else if (customerId) {
            // Filter by customer ID
            const customerOrders = db_1.database.orders.filter((order) => order.customerId === customerId);
            res.json(customerOrders);
        }
        else {
            // Get all orders
            res.json(db_1.database.orders);
        }
    }
    // Get a single order by ID
    getOrderById(req, res) {
        const orderId = req.params.id;
        const order = db_1.database.orders.find((o) => o.id === orderId);
        if (order) {
            res.json(order);
        }
        else {
            res.status(404).json({ error: "Order not found" });
        }
    }
    // Update an existing order by ID
    updateOrder(req, res) {
        const orderId = req.params.id;
        const updatedOrderData = req.body;
        const orderIndex = db_1.database.orders.findIndex((o) => o.id === orderId);
        if (orderIndex !== -1) {
            db_1.database.orders[orderIndex] = Object.assign(Object.assign({}, db_1.database.orders[orderIndex]), updatedOrderData);
            res.json(db_1.database.orders[orderIndex]);
        }
        else {
            res.status(404).json({ error: "Order not found" });
        }
    }
    // Delete an existing order by ID
    deleteOrder(req, res) {
        const orderId = req.params.id;
        const orderIndex = db_1.database.orders.findIndex((o) => o.id === orderId);
        if (orderIndex !== -1) {
            db_1.database.orders.splice(orderIndex, 1);
            res.sendStatus(204);
        }
        else {
            res.status(404).json({ error: "Order not found" });
        }
    }
}
exports.default = new OrderController();
