import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../button/Button";

const selectClass = "bg-white px-2 py-2 rounded-[5px] shadow-lg";

const FilterProducts = ({ setSort, setCategory, setProducts }) => {
  const [categories, setCategories] = useState([]);

  const sortRef = useRef(null);
  const categoryRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(sortRef.current.value);
    console.log(categoryRef.current.value);

    setSort(sortRef.current.value);
    setCategory(categoryRef.current.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const categories = await res.json();

      console.log(categories);
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-5  flex justify-center">
      <form className="flex gap-2" onSubmit={submitHandler}>
        <select name="sort" id="sort" className={selectClass} ref={sortRef}>
          <option value="sort">sort</option>
          <option value="lowest">Price (lowest)</option>
          <option value="highest">Price (highest)</option>
        </select>

        <select
          name="category"
          id="category"
          className={selectClass}
          ref={categoryRef}
        >
          <option value="category">select category</option>
          {categories?.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
        </select>
        <Button className="cursor-pointer rounded-[5px]">
          <input
            type="submit"
            value="filter products"
            className="cursor-pointer"
          />
        </Button>
      </form>
    </div>
  );
};

export default FilterProducts;
