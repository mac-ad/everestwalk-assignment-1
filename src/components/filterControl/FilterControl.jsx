import { useEffect, useState } from "react";
import Button from "../button/Button";

const selectClass = "bg-white px-2 py-2 rounded-[5px]";

const FilterControl = ({ setSort, setCategory, selectedCategories }) => {
  const [categories, setCategories] = useState([]);
  const submitHandler = (e) => {};

  const sortChangeHandler = (e) => {
    if (e.target.value === "sort") return;
    setSort(e.target.value);
  };

  const categoryCheckHandler = (e) => {
    if (e.target.checked) {
      setCategory((prev) => [...prev, e.target.value]);
      return;
    }

    setCategory((prev) => {
      return prev.filter((cat) => cat !== e.target.value);
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const categories = await res.json();

      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <form className="flex gap-2 flex-col" onSubmit={submitHandler}>
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
      </form>
    </div>
  );
};

export default FilterControl;
