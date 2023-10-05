"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class ProductController {
    createProduct(req, res) {
        const product = req.body;
        db_1.database.products.push(product);
        res.status(201).json(product);
    }
    getAllProducts(req, res) {
        res.status(200).json(db_1.database.products);
    }
    getProductById(req, res) {
        const productId = req.params.id;
        const product = db_1.database.products.find((p) => p.id === productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
        }
        else {
            res.status(200).json(product);
        }
    }
    updateProduct(req, res) {
        const productId = req.params.id;
        const updatedProduct = req.body;
        const index = db_1.database.products.findIndex((p) => p.id === productId);
        if (index === -1) {
            res.status(404).json({ error: "Product not found" });
        }
        else {
            db_1.database.products[index] = updatedProduct;
            res.status(200).json(updatedProduct);
        }
    }
    deleteProduct(req, res) {
        const productId = req.params.id;
        const index = db_1.database.products.findIndex((p) => p.id === productId);
        if (index === -1) {
            res.status(404).json({ error: "Product not found" });
        }
        else {
            db_1.database.products.splice(index, 1);
            res.status(204).send();
        }
    }
}
exports.default = new ProductController();
