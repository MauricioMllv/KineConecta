import { useEffect, useState } from "react";
import { getNewsRequest } from "../../Api/news.api.js";
import NewsCard from "../Card/index.jsx";

function HomeNews() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function loadNews() {
      const response = await getNewsRequest()
      setNews(response.data)
    }
    loadNews()
  }, [])

  const latestNews = news.slice(0, 3);

  return (
    <div className="flex flex-col items-center h-full mb-10 sm:px-5 md:px-10">
      <h2 className="container flex justify-center w-full p-3 bg-gradient-to-r from-[#b5ccdb] via-[#367dab] to-[#084d6e] text-white text-3xl">Noticias y Artículos</h2>
      <article className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-5">
        {
          latestNews.map(news => (
            <NewsCard news={news} key={news.id} />
          ))
        }
      </article>
      <a href="/todasnoticias"><button className="flex justify-center my-4 px-12 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">
        Ver Más
      </button></a>
    </div>
  );
}

export default HomeNews; 