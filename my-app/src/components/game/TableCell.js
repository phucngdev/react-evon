import React from "react";
import Cell from "./Cell";

const TableCell = () => {
  return (
    <div className="table-cell">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index}></Cell>
        ))}
    </div>
  );
};

export default TableCell;
