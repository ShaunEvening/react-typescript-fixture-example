import productJSON from "./product.data.json";
import { Product } from "./product.types";

const products: Product[] = productJSON;

/**
 *
 * @returns An array of products wrapped in a promise
 */
const getProducts = (): Promise<Product[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

export const ProductsAPI = {
  getProducts,
};
