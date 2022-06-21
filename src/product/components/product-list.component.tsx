import React, { useCallback } from "react";
import { Product } from "../product.types";

import "./product-list.css";

interface ProductListItemProps {
  product: Product;
  selectProduct: (product: Product) => void;
}
export const ProductListItem = ({
  product,
  selectProduct,
}: ProductListItemProps) => {
  const onClick = useCallback(() => {
    selectProduct(product);
  }, [product, selectProduct]);

  return (
    <li className="product-list-item" onClick={onClick}>
      <div>
        <p className="product-name">{product.name}</p>
        <p className="product-sku">sku: {product.sku}</p>
      </div>
    </li>
  );
};

interface ProductListProps {
  children: React.ReactNode;
  title: string;
}
export const ProductList = ({ title, children }: ProductListProps) => (
  <>
    <h2 id="product-list-label" className="product-list-title">
      {title}
    </h2>
    <ul aria-labelledby="product-list-label" className="product-list">
      {children}
    </ul>
  </>
);
