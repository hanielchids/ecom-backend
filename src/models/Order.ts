interface Order {
  id: string;
  paid: boolean;
  customerId: string;
  products: string[];
  total: number;
}

export default Order;
