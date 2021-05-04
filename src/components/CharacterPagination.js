import React from "react";
import { Pagination } from "react-bootstrap";

const CharacterPagination = ({
  charactersPerPage,
  totalCharacters,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-center">
      <Pagination className="justify-content-center">
        {pageNumbers.map((number) => (
          <Pagination.Item
            className="text-primary"
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default CharacterPagination;
