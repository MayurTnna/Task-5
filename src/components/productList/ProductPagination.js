import React from "react";
import Pagination from "react-bootstrap/Pagination";

const ProductPagination = ({ active, handleIncrement }) => {
  let items = [];
  for (let number = 1; number <= 100 / 8; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleIncrement(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="pagination-line pagination_container ">
      {items}
    </Pagination>
  );
};

export default ProductPagination;
