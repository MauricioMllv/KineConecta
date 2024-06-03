import React from "react";

const Pagination = ({ currentPage, totalPages, goToPage }) => {
  const renderPageButtons = () => {
    const pageButtons = [];

    // Limitamos la cantidad de botones de paginación mostrados a 5
    const maxPageButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    // Ajustamos el inicio si estamos cerca del final de la lista
    startPage = Math.max(1, endPage - maxPageButtons + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`px-2 py-1 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F] ${
            i === currentPage ? "bg-[#BF922F]" : ""
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return <>{renderPageButtons()}</>;
};

export default Pagination;
