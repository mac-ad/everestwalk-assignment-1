import { useEffect, useState } from "react";
import Wrapper from "../../components/HOC/Wrapper";
import { urls } from "../../statics";
import ProductsGrid from "../../components/products/ProductsGrid";
import FilterProducts from "../../components/products/FilterProducts";
import SearchComp from "../../components/searchComp/SearchComp";

// fetch products here and send it to the presentational component of grid-products

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  // const [sort, setSort] = useState(null);
  // const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(urls.products);
      const productsResponse = await res.json();

      setProducts(productsResponse.products);
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  // const filteredProducts = [];

  // if(sort !== "sort"){
  //   filteredProducts =
  // }
  // }, [sort, category]);

  return (
    <div className="py-5">
      <Wrapper>
        {/* <h1 className="text-3xl font-semibold mb-5">Products</h1> */}
        {/*  filter */}
        {/* <FilterProducts
          setSort={setSort}
          setCategory={setCategory}
          setProducts={setProducts}
        /> */}
        <div className="my-10">
          <SearchComp />
        </div>

        <ProductsGrid products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductsPage;
