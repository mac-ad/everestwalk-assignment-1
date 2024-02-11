import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterProducts from "./FilterProducts";

const ProductsGrid = ({ products }) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products?.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
