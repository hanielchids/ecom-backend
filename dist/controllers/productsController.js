"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class ProductsController {
    getProducts(req, res) {
        res.json(db_1.database.products);
    }
    createProduct(req, res) {
        const product = req.body;
        db_1.database.products.push(product);
        res.status(201).json(product);
    }
    removeProducts(req, res) {
        const idsToRemove = req.body;
        const removedProducts = [];
        idsToRemove.forEach((id) => {
            const index = db_1.database.products.findIndex((product) => product.id === id);
            if (index !== -1) {
                const removedProduct = db_1.database.products.splice(index, 1)[0];
                removedProducts.push(removedProduct);
            }
        });
        res.status(200).json(removedProducts);
    }
}
exports.default = new ProductsController();
