
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ news }) => {

  const navigate = useNavigate()

  // const truncatedContent = content.split(' ').slice(0, 10).join(' ') + '...';
  // texto a mostrar en card
  return (
    <a href="" onClick={() => navigate(`/noticias/${news.id}`)}><div className="bg-white border border-slate-300 p-0.5 m-4 shadow-xl rounded-md md:w-[200px] sm:flex sm:flex-col sm:items-center">
      <section className='flex md:flex-col md:justify-center'>
      {news.imagecard && <img src={JSON.parse(news.imagecard).url} className="mx-auto w-32 h-32 md:w-full md:h-full object-cover rounded-md justify-center" />}

        <section className='ml-2 pt-1 md:flex-col justify-center '>
          <h4 className="text-base mb-1">{news.title}</h4>
          <p className="text-gray-600 mb-1 text-xs">{news.description}</p>
        </section>
      </section>
    </div></a>
  );
};

export default NewsCard;