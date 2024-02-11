import { useEffect, useState } from "react";
import Wrapper from "../../components/HOC/Wrapper";
import { useSearchParams } from "react-router-dom";
import ProductsGrid from "../../components/products/ProductsGrid";
import SearchComp from "../../components/searchComp/SearchComp";
import Pagination from "../../components/pagination/Pagination";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);
  const [skip, setSkip] = useState(0);
  const [page, setpage] = useState(0);

  const query = searchParams.get("q");

  const onPageChange = (number) => {
    async function fetchProducts() {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${limit}`
      );

      const productsResponse = await res.json();

      console.log(productsResponse);
      setProducts(productsResponse.products);
    }

    fetchProducts();
  };

  useEffect(() => {
    async function searchProducts() {
      console.log("fetching ", query);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&`
      );
      const productsResponse = await res.json();

      const skip = (currentPage - 1) * limit;

      setProducts(productsResponse.products);

      setTotal(productsResponse.total);
      setLimit(productsResponse.limit);
      setSkip(productsResponse.skip);
    }

    searchProducts();
  }, [query]);

  return (
    <div className="mb-10">
      <Wrapper>
        <div className="mb-10">
          <SearchComp val={query} />
        </div>
        {products?.length > 0 && <ProductsGrid products={products} />}
        {limit !== total && (
          <Pagination total={total} limit={limit} onPageChange={onPageChange} />
        )}
      </Wrapper>
    </div>
  );
};

export default SearchPage;
