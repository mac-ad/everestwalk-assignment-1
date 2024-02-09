import { useEffect, useState } from "react";
import Wrapper from "../../components/HOC/Wrapper";
import { urls } from "../../statics";
import ProductsGrid from "./ProductsGrid";

// fetch products here and send it to the presentational component of grid-products

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(urls.products);
      const productsResponse = await res.json();

      setProducts(productsResponse.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-5">
      <Wrapper>
        <h1 className="text-3xl font-semibold mb-5">Products</h1>
        {/*  filter */}
        <ProductsGrid products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductsPage;
