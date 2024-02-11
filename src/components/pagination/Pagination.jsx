import { useState } from "react";

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

  return (
    <div>
      {pageNumbers.map((page) => (
        <button onClick={() => handleClick(page)} key={page}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
