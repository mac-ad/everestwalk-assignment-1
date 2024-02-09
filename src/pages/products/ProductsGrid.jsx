import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
