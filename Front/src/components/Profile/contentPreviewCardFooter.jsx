import { useImagesF } from '../../context/ImagesFProvider';
import { useNavigate } from 'react-router-dom';

function ImagesCard ({ images }) {

    const {deleteImagesF } = useImagesF()
    const navigate = useNavigate()
    console.log(images)
    
    return (
      <div className="bg-white border border-slate-300 p-0.5 m-4 shadow-xl rounded-md md:w-[300px] sm:flex sm:flex-col sm:items-center">
        <section className='flex flex-col justify-center bg-[#e4e4e4]'>
          <h3 className='font-medium italic text-center text-lg py-4'>Imagen actual</h3>
          {images.url && <img src={(images.url)} className="mx-auto w-32 h-32 md:w-full md:h-full object-cover rounded-md justify-center" />}
          <section className='text-center space-x-2 my-2'>
          <button type="button" onClick={() => deleteImagesF(images.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Eliminar</button>
          </section>
        </section>
        
        
      </div>
    );
  };
  
  export default ImagesCard;