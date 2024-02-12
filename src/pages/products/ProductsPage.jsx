import { useEffect, useState } from "react";
import Wrapper from "../../components/HOC/Wrapper";
import { urls } from "../../statics";
import ProductsGrid from "../../components/products/ProductsGrid";
import FilterProducts from "../../components/products/FilterProducts";
import SearchComp from "../../components/searchComp/SearchComp";
import { LoadingButton } from "@mui/lab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

// fetch products here and send it to the presentational component of grid-products

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const res = await fetch(urls.products);
      const productsResponse = await res.json();
      console.log("fetching ", productsResponse);
      setProducts(productsResponse.products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="py-5 mb-10">
      <Wrapper>
        <div className="my-10">
          <SearchComp />
        </div>
        {loading ? (
          <div className="min-h-[30vh] flex items-center justify-center">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-4xl animate-loader"
            />
          </div>
        ) : (
          <ProductsGrid products={products} />
        )}
      </Wrapper>
    </div>
  );
};

export default ProductsPage;
