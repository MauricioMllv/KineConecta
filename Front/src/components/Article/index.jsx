
import { useParams } from 'react-router-dom';
import { useNews } from '../../context/NewsProvider';
import { useEffect, useState } from 'react';

const Article = () => {
    const { getNews } = useNews();
    const params = useParams();
    const [news, setNews] = useState(null);
    

    useEffect(() => {
        const loadNews = async () => {
            if (params.id) {
                const loadedNews = await getNews(params.id);
                setNews(loadedNews);
            }
        };
        loadNews();
    }, [params.id, getNews]);

    // Verificar si news está definido antes de acceder a sus propiedades
    if (!news) {
        return <div>Publicación no encontrada</div>;
    }

    return (
        <article className="relative">
            <div className="relative">
            {news.imagefull && <img src={JSON.parse(news.imagefull).url} className="w-full" />}
            
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl font-bold text-white drop-shadow-[0_2.5px_1.2px_rgba(0,0,0,0.8)]">
                    {news.title}
                </h2>
            </div>
            <div className="py-5 mx-10">
                <p className="text-base text-balance py-4">{news.content}</p>
            </div>
        </article>
    );
};

export default Article;
