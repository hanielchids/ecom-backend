"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class CustomerController {
    getAllCustomers(req, res) {
        res.status(200).json(db_1.database.customers);
    }
    createCustomer(req, res) {
        const customer = req.body;
        db_1.database.customers.push(customer);
        res.status(201).json(customer);
    }
    getCustomerById(req, res) {
        const customerId = req.params.id;
        const customer = db_1.database.customers.find((c) => c.id === customerId);
        if (customer) {
            res.status(200).json(customer);
        }
        else {
            res.status(404).json({ error: "Customer not found" });
        }
    }
    deleteCustomerById(req, res) {
        const customerId = req.params.id;
        const index = db_1.database.customers.findIndex((c) => c.id === customerId);
        if (index !== -1) {
            db_1.database.customers.splice(index, 1);
            res.status(200).json({ message: "Customer deleted successfully" });
        }
        else {
            res.status(404).json({ error: "Customer not found" });
        }
    }
}
exports.default = new CustomerController();
