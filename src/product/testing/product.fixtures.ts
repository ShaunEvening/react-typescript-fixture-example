import { Product } from "../product.types";

const DEFAULT_MOCK_PRODUCT: Product = {
  sku: "xxxxxx",
  name: "cube",
  description: "like a square but 3d!",
  quantity: 100,
};

export const createMockProduct = (overrides: Partial<Product>): Product => ({
  ...DEFAULT_MOCK_PRODUCT,
  ...overrides,
});
