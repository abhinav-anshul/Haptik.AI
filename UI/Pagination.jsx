import React from "react";

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
            style={{
              all: "unset",
              fontSize: "1.2rem",
              backgroundColor: "white",
              margin: "0px 5px",
              height: "30px",
              width: "30px",
              borderRadius: "4px",
              textAlign: "center",
              boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              cursor: "pointer",
            }}
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
