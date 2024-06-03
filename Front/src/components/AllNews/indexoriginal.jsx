import React, { useState } from 'react';
import Card from '../Card/index.jsx';

const News = () => {
  // Array de noticias (puede ser un estado que obtengas de una fuente de datos)
  const newsData = [
    { id: 1, title: 'Noticia 1' },
    { id: 2, title: 'Noticia 2' },
    { id: 3, title: 'Noticia 3' },
    { id: 4, title: 'Noticia 4' },
    { id: 5, title: 'Noticia 5' },
    { id: 6, title: 'Noticia 6' },
    { id: 7, title: 'Noticia 7' },
    { id: 8, title: 'Noticia 8' },
    { id: 9, title: 'Noticia 9' },
    { id: 10, title: 'Noticia 10' },
    { id: 11, title: 'Noticia 11' },
    { id: 12, title: 'Noticia 12' },
    { id: 13, title: 'Noticia 13' },
    { id: 14, title: 'Noticia 14' },
    { id: 15, title: 'Noticia 15' },
    { id: 16, title: 'Noticia 16' },
    { id: 17, title: 'Noticia 17' },
    { id: 18, title: 'Noticia 18' },
    { id: 19, title: 'Noticia 19' },
    { id: 20, title: 'Noticia 20' },
    { id: 21, title: 'Noticia 21' },
    { id: 22, title: 'Noticia 22' },
    { id: 23, title: 'Noticia 23' },
    { id: 24, title: 'Noticia 24' },
    { id: 25, title: 'Noticia 25' },
    { id: 26, title: 'Noticia 26' },
    { id: 27, title: 'Noticia 27' },
    { id: 28, title: 'Noticia 28' },
    { id: 29, title: 'Noticia 29' },
    { id: 30, title: 'Noticia 30' },
    { id: 31, title: 'Noticia 31' },
    { id: 32, title: 'Noticia 32' },
    { id: 33, title: 'Noticia 33' },
    { id: 34, title: 'Noticia 34' },
    { id: 35, title: 'Noticia 35' },
    { id: 36, title: 'Noticia 36' },
    { id: 37, title: 'Noticia 37' },
    { id: 38, title: 'Noticia 38' },
    { id: 39, title: 'Noticia 39' },
    { id: 40, title: 'Noticia 40' },
    // Agrega más noticias según necesites
  ];

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Cantidad de tarjetas por página
  const cardsPerPage = 9;

  // Calcular el total de páginas
  const totalPages = Math.ceil(newsData.length / cardsPerPage);

  // Función para cambiar a una página específica
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generar botones de paginación
  const renderPageButtons = () => {
    const pageButtons = [];
    let startPage = 1;
    if (currentPage > 2) {
      startPage = currentPage - 1;
      pageButtons.push(
        <button
          key="prev"
          className="px-2 py-1 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]"
          onClick={() => goToPage(currentPage - 1)}
        >
          &lt;
        </button>
      );
    }
    for (let i = startPage; i < startPage + 3 && i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`px-2 py-1 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F] ${
            i === currentPage ? 'bg-[#BF922F]' : ''
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }
    if (currentPage < totalPages - 1) {
      pageButtons.push(
        <button
          key="next"
          className="px-2 py-1 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]"
          onClick={() => goToPage(currentPage + 1)}
        >
          &gt;
        </button>
      );
    }
    return pageButtons;
  };

  // Índice inicial y final de las tarjetas a mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = newsData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="flex flex-col items-center h-full mb-10 sm:px-5 md:px-10">
      <h2 className="container flex justify-center sm:w-full md:w-[80%] p-3 bg-[#367DAB] text-white text-3xl">Noticias y Artículos</h2>
      <article className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-5">
        {currentCards.map(news => (
          <Card key={news.id} title={news.title} />
        ))}
      </article>
      <div className="flex justify-center space-x-4">
        {/* Botones de paginación */}
        {renderPageButtons()}
      </div>

    </div>
  );
};

export default News;