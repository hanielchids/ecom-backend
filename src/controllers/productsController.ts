import { Request, Response } from "express";
import Product from "../models/Product";
import { database } from "../db";

class ProductsController {
  getProducts(req: Request, res: Response): void {
    res.json(database.products);
  }

  createProduct(req: Request, res: Response): void {
    const product: Product = req.body;
    database.products.push(product);
    res.status(201).json(product);
  }

  removeProducts(req: Request, res: Response): void {
    const idsToRemove: string[] = req.body;
    const removedProducts: Product[] = [];

    idsToRemove.forEach((id) => {
      const index = database.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        const removedProduct = database.products.splice(index, 1)[0];
        removedProducts.push(removedProduct);
      }
    });

    res.status(200).json(removedProducts);
  }
}

export default new ProductsController();
