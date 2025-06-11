import type { Product } from "./06-function-desestructuring";
import { taxCalculation } from "./06-function-desestructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 100,
  },
  {
    description: "Ipad",
    price: 150,
  },
];

//Tax = 0.15
const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });
console.log(`Total ${total}`);
console.log(`Tax ${tax}`);
