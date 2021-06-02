import Pagination from "react-bootstrap-4-pagination";
import React from "react";

export default function Paginations({ postsPerPage, totalPosts, paginate }) {


  const handleChange = (value) => {
    paginate(value);
  };

  return (
    <div className="paginationBlock">
      <Pagination
        count={Math.floor(totalPosts / postsPerPage + 1)}
        variant="outlined"
        shape="rounded"
        onClick={handleChange}
      >


    </Pagination>
    </div>

  );
}