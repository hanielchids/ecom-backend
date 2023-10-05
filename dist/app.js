"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const ordersRoutes_1 = __importDefault(require("./routes/ordersRoutes"));
const app = (0, express_1.default)();
const port = 5000;
// Middleware
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// Routes
app.use("/product", productRoutes_1.default);
app.use("/order", orderRoutes_1.default);
app.use("/customer", customerRoutes_1.default);
app.use("/products", productsRoutes_1.default);
app.use("/orders", ordersRoutes_1.default);
// Error Handling Middleware
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ error: "Internal Server Error" });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
