import { useEffect, useState } from "react";
import Wrapper from "../../components/HOC/Wrapper";
import { useSearchParams } from "react-router-dom";
import ProductsGrid from "../../components/products/ProductsGrid";
import SearchComp from "../../components/searchComp/SearchComp";
import Pagination from "../../components/pagination/Pagination";
import { Loader, Loader2 } from "lucide-react";
import FilterControl from "../../components/filterControl/FilterControl";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);

  const [sort, setSort] = useState(null);
  const [categories, setCategories] = useState([]);

  const query = searchParams.get("q");

  function filterByCategory() {
    const filteredProduct = products.filter((item) =>
      categories.includes(item.category)
    );
    console.log(filteredProduct);
    setFilteredProducts(filteredProduct);
  }

  useEffect(() => {
    filterByCategory();
  }, [categories]);

  useEffect(() => {
    function sortLowest(array) {
      return [...array].sort((a, b) => a.price - b.price);
    }

    function sortHighest(array) {
      return [...array].sort((a, b) => b.price - a.price);
    }

    if (sort === "lowest") {
      const filtered = sortLowest(
        categories.length > 0 ? filteredProducts : products
      );
      setFilteredProducts(filtered);
    } else {
      const filtered = sortHighest(
        categories.length > 0 ? filteredProducts : products
      );
      setFilteredProducts(filtered);
    }
  }, [sort]);

  const onPageChange = (number) => {
    setLoading(true);
    async function fetchProducts() {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${
          (number - 1) * limit
        }`
      );
      const productsResponse = await res.json();
      console.log(productsResponse);
      setProducts(productsResponse.products);
      setCategories([]);
      setSort(null);
      setLoading(false);
    }
    fetchProducts();
  };

  useEffect(() => {
    async function searchProducts() {
      setLoading(true);
      console.log("fetching ", query);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const productsResponse = await res.json();
      console.log(productsResponse);
      setProducts(productsResponse.products);
      setTotal(productsResponse.total);
      setLimit(productsResponse.limit);
      setLoading(false);
    }

    searchProducts();
  }, [query]);

  return (
    <div className="">
      <Wrapper>
        <div className="my-10">
          <SearchComp val={query} />
        </div>
        <h2 className="mb-5 text-2xl">Search results for "{query}"</h2>
        <div className="grid grid-cols-[minmax(250px,1fr),4fr] gap-10">
          <div className="mt-5 mb-10 sticky top-[70px] h-[500px]">
            <FilterControl
              setSort={setSort}
              setCategory={setCategories}
              selectedCategories={categories}
            />
          </div>
          <div>
            {loading ? (
              <div className=" flex flex-col gap-2 justify-center items-center min-h-[500px]">
                <Loader2 className="animate-loader" />
                ...getting products
              </div>
            ) : (
              <>
                <div className="">
                  <div className=""></div>
                  {products?.length > 0 && categories.length === 0 && (
                    <ProductsGrid products={products} />
                  )}
                  {categories.length > 0 && (
                    <ProductsGrid products={filteredProducts} />
                  )}
                </div>
              </>
            )}
            {limit !== total && (
              <div className="mt-5 mb-10">
                <Pagination
                  total={total}
                  limit={limit}
                  onPageChange={onPageChange}
                />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SearchPage;
