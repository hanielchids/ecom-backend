import Product from "./models/Product";
import Order from "./models/Order";
import Customer from "./models/Customer";

export const database = {
  products: [] as Product[],
  orders: [] as Order[],
  customers: [] as Customer[],
};
