import { Request, Response } from "express";
import Product from "../models/Product";
import { database } from "../db";

class ProductController {
  createProduct(req: Request, res: Response): void {
    const product: Product = req.body;
    database.products.push(product);
    res.status(201).json(product);
  }

  getAllProducts(req: Request, res: Response): void {
    res.status(200).json(database.products);
  }

  getProductById(req: Request, res: Response): void {
    const productId: string = req.params.id;
    const product = database.products.find((p) => p.id === productId);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  }

  updateProduct(req: Request, res: Response): void {
    const productId: string = req.params.id;
    const updatedProduct: Product = req.body;
    const index = database.products.findIndex((p) => p.id === productId);
    if (index === -1) {
      res.status(404).json({ error: "Product not found" });
    } else {
      database.products[index] = updatedProduct;
      res.status(200).json(updatedProduct);
    }
  }

  deleteProduct(req: Request, res: Response): void {
    const productId: string = req.params.id;
    const index = database.products.findIndex((p) => p.id === productId);
    if (index === -1) {
      res.status(404).json({ error: "Product not found" });
    } else {
      database.products.splice(index, 1);
      res.status(204).send();
    }
  }
}

export default new ProductController();
