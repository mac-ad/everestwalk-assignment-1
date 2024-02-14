import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useRef, useState } from "react";
import { SearchIcon } from "lucide-react";

const SearchComp = ({ val }) => {
  const searchRef = useRef(null);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // if (searchRef.current.value === "") return;
    navigate(`/search?q=${searchRef.current.value}`);
  };

  return (
    <div className="">
      <form
        onSubmit={submitHandler}
        className="flex gap-1 max-w-[500px] mx-auto"
      >
        <input
          ref={searchRef}
          type="text"
          className="border px-2 w-full py-2"
          placeholder="Search products..."
          //   value={val}
          //   onChange = {}
        />
        <button className="bg-black text-white px-3 rounded-md">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchComp;
