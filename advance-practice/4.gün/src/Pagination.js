import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
