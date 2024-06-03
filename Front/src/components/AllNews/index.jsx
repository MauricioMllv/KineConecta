import { useEffect, useState } from "react";
import NewsCard from "../Card/index.jsx";
import { useNews } from "../../context/NewsProvider.jsx";

const NewsPage = () => {

  const { news, loadNews } = useNews();

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Cantidad de tarjetas por página
  const newsPerPage = 9;

  useEffect(() => {
    loadNews();
  }, []);

  // Calcular el total de páginas
  const totalPages = Math.ceil(news.length / newsPerPage);

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
          className={`px-2 py-1 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F] ${i === currentPage ? 'bg-[#BF922F]' : ''
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
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <div className="flex flex-col items-center h-full mb-10 sm:px-5 md:px-10">
      <h2 className="container flex justify-center w-full p-3 bg-gradient-to-r from-[#b5ccdb] via-[#367dab] to-[#084d6e] text-white text-3xl">Noticias y Artículos</h2>
      <article className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-5">
        {currentNews.map(news => (
          <NewsCard news={news} key={news.id} />
        ))}
      </article>
      {totalPages > 1 && ( // Aquí se verifica si hay más de una página
        <div className="flex justify-center space-x-4">
          {/* Botones de paginación */}
          {renderPageButtons()}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
