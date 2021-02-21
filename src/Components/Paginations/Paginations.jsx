import React from "react";
import Paginations from "@material-ui/lab/Pagination";




export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <div className="paginationBlock">
      <Paginations
        count={Math.floor(totalPosts / postsPerPage + 1)}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}