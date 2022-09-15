import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack spacing={92}>
      <Pagination
        count={pageNumbers.length}
        color="primary"
        onChange={(e, page) => paginate(page)}
      ></Pagination>
    </Stack>
  );
};

export default Paginate;
