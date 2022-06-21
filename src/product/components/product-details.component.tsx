import React from "react";
import { Product } from "../product.types";

import "./product-details.css";

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}
export const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
  return (
    <div className="product-details-card">
      <p className="product-details-header">{product.name}</p>
      <p className="product-details-description">{product.description}</p>
      <button className="product-details-close-button" onClick={onClose}>
        Dismiss
      </button>
    </div>
  );
};
