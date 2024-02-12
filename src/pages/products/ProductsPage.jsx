import { useEffect, useState } from "react";
import Wrapper from "../../components/HOC/Wrapper";
import { urls } from "../../statics";
import ProductsGrid from "../../components/products/ProductsGrid";
import FilterProducts from "../../components/products/FilterProducts";
import SearchComp from "../../components/searchComp/SearchComp";

// fetch products here and send it to the presentational component of grid-products

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(urls.products);
      const productsResponse = await res.json();
      console.log("fetching ", productsResponse);
      setProducts(productsResponse.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-5">
      <Wrapper>
        <div className="my-10">
          <SearchComp />
        </div>
        {products.length > 0 && <ProductsGrid products={products} />}
      </Wrapper>
    </div>
  );
};

export default ProductsPage;
