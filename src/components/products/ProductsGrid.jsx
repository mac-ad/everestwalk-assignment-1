import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterProducts from "./FilterProducts";
import { twMerge } from "tailwind-merge";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const selectClass = "bg-white px-2 py-2 rounded-[5px] border-2 border-black";

const ProductsGrid = ({ products, filter = true }) => {
  const [visible, setVisible] = useState(false);
  const sortBy = "price";
  const [sort, setSort] = useState(null);
  const [filtered, setFiltered] = useState([...products]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categories, setCategories] = useState([]);

  const sortAndFilter = () => {
    console.log("sort and filter called");
    let finalItems = products;
    // filter by category
    if (selectedCategory.length > 0) {
      finalItems = finalItems.filter((item) =>
        selectedCategory.includes(item.category)
      );
    }
    // sorting
    let sortedItems = [...finalItems];

    if (sort !== "sort") {
      sortedItems.sort((a, b) => {
        return sort === "lowest" ? a.price - b.price : b.price - a.price;
      });
    }

    console.log("sortedItms = ", sortedItems);

    setFiltered((prev) => sortedItems);
  };

  const sortChangeHandler = (e) => {
    setSort(e.target.value);
  };

  const categoryCheckHandler = (e) => {
    if (e.target.checked) {
      setSelectedCategory((prev) => [...prev, e.target.value]);
      return;
    }

    setSelectedCategory((prev) => {
      return prev.filter((item) => item !== e.target.value);
    });
  };

  console.log(sort);

  const fitlerOptionToggle = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    sortAndFilter();
  }, [sort, selectedCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const categories = await res.json();

      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <div
      className={twMerge(
        "grid grid-cols-1 md:grid-cols-[1fr,3fr] items-start gap-10",
        !filter && "md:grid-cols-[1fr]"
      )}
    >
      <div className={twMerge("md:hidden py-2 bg-black w-fit rounded-md ")}>
        <Button
          onClick={fitlerOptionToggle}
          sx={{
            color: "white",
          }}
        >
          <FontAwesomeIcon icon={faFilter} />
        </Button>
      </div>
      {filter && (
        <div
          className={twMerge(
            " bg-white md:bg-[unset] fixed md:sticky md:top-5 md:h-[750px]  z-30 top-0 left-0 bottom-0 h-full min-w-[250px] px-5 pt-10 transition-all -translate-x-full md:translate-x-[unset]",
            `${visible && "translate-x-50 overflow-hidden"}`
          )}
        >
          <select
            name="sort"
            id="sort"
            className={selectClass}
            onChange={sortChangeHandler}
          >
            <option value="sort">sort</option>
            <option value="lowest">Price (lowest)</option>
            <option value="highest">Price (highest)</option>
          </select>
          <div className=" mt-10 overflow-y-auto pr-5 pl-1">
            <h2 className="font-bold mb-2">Categories:</h2>
            <div className="flex flex-col gap-1">
              {categories?.map((cat) => (
                <div className="category-item flex gap-4">
                  <input
                    type="checkbox"
                    name="category"
                    className=" w-[18px]"
                    id={cat}
                    value={cat}
                    onChange={categoryCheckHandler}
                  />
                  <label htmlFor={cat}>{cat}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* overlay */}
      {visible && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)] z-20"
          onClick={fitlerOptionToggle}
        ></div>
      )}

      <div className="grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered?.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
