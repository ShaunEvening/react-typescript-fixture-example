import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import {
  Product,
  ProductsAPI,
  ProductDetails,
  ProductList,
  ProductListItem,
} from "./product";

function App() {
  const [productsList, setProductsList] = useState<Product[] | undefined>(
    undefined
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  const clearProduct = useCallback(() => {
    setSelectedProduct(undefined);
  }, [setSelectedProduct]);

  // On mount, load our product list
  useEffect(() => {
    ProductsAPI.getProducts().then(setProductsList);
  }, []);

  return (
    <div className="app-container">
      <div className="app">
        {
          // If there is a selected product, Render it
          selectedProduct && (
            <ProductDetails product={selectedProduct} onClose={clearProduct} />
          )
        }

        <ProductList title="Fruit List">
          {productsList &&
            productsList.map((product) => (
              <ProductListItem
                product={product}
                selectProduct={setSelectedProduct}
              />
            ))}
        </ProductList>
      </div>
    </div>
  );
}

export default App;
