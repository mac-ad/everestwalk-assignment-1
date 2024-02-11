import { useState } from "react";
import { twMerge } from "tailwind-merge";

const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

const Pagination = ({ total, limit, onPageChange }) => {
  //   const pagesCount = Math.ceil(total / limit);
  //   const pages = range(1, pagesCount);

  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
    onPageChange(number);
  };

  console.log("current page = ", currentPage);

  return (
    <div className="flex  justify-center">
      {pageNumbers.map((page) => (
        <button
          onClick={() => handleClick(page)}
          key={page}
          className={twMerge(
            "border h-[30px] w-[30px] bg-gray-500 text-white hover:bg-black",
            currentPage === page && "bg-black"
          )}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
