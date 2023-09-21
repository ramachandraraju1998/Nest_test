export class CreateOrderDTO {
  orderaddress: string;
  productDetails: {
    product_id: string,
    name: string;
    description: string;
    price: number;
    category: string;
  };
}
