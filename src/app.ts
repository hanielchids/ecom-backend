import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import customerRoutes from "./routes/customerRoutes";
import { database } from "./db";
import productsRoutes from "./routes/productsRoutes";
import ordersRoutes from "./routes/ordersRoutes";

const app: Application = express();
const port: number = 5000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/customer", customerRoutes);
app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

// Error Handling Middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
