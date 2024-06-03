import { useNews } from '../../context/NewsProvider';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/img/1.png'

function NewsCard ({ news }) {

    const {deleteNews} = useNews()
    const navigate = useNavigate()
    

    
    // const truncatedContent = content.split(' ').slice(0, 10).join(' ') + '...';
    // texto a mostrar en card
    return (
      <div className="bg-white border border-slate-300 p-0.5 m-4 shadow-xl rounded-md md:w-[200px] sm:flex sm:flex-col sm:items-center">
        <section className='flex flex-col justify-center'>
          {news.imagecard && <img src={JSON.parse(news.imagecard).url} className="mx-auto w-32 h-32 md:w-full md:h-full object-cover rounded-md justify-center" />}
        
          <section className='ml-2 pt-1 md:flex-col justify-center '>
            <h4 className="text-base mb-1">{news.title}</h4>
            <p className="text-gray-600 mb-1 text-xs">{news.description}</p>
          </section>
          <section className='text-center space-x-2 my-2'>
          <button type="button" onClick={() => navigate(`/profile-edit-news/${news.id}`)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Editar</button>
          <button type="button" onClick={() => deleteNews(news.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Eliminar</button>
          </section>
        </section>
        
        
      </div>
    );
  };
  
  export default NewsCard;