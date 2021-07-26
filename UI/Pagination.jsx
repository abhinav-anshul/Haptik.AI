import React from "react";
import styles from "../styles/Pagination.module.css";

function Pagination({ friendsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / friendsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div>
        {pageNumbers.map((number) => (
          <button
            className={styles.pagination_button}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
