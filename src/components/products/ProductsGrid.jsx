import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterProducts from "./FilterProducts";

const selectClass = "bg-white px-2 py-2 rounded-[5px]";

const ProductsGrid = ({ products }) => {
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
    <div className="grid grid-cols-[1fr,3fr] items-start gap-10">
      <div className="h-[500px] sticky top-[70px]">
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
        <div className=" mt-5 overflow-y-auto pr-5 pl-1">
          <h2 className="font-bold mb-2">Categories:</h2>
          {categories?.map((cat) => (
            <div className="category-item flex  justify-between">
              <label htmlFor={cat}>{cat}</label>
              <input
                type="checkbox"
                name="category"
                id={cat}
                value={cat}
                onChange={categoryCheckHandler}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {filtered?.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
