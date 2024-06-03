import { useEffect, useState } from 'react';
import { useImagesF } from '../../context/ImagesFProvider';
import LogoFooter from './logo';

const Footer = () => {
    const {images, loadImagesF} = useImagesF();
  
    useEffect(() => {
      loadImagesF();
    }, []);

    function RenderImages() {
        return (
        <div className="">
          {images.map(images => (
            <LogoFooter images={images} key={images.id} />
          ))}
        </div>
        )
    }
    return (
        <div className="flex flex-col items-center h-full bg-[#084D6E]">
            <RenderImages />
            <ul className='text-white text-center pb-2'>
                <a href=""><li>Contactanos</li></a>
                <a href=""><li>Quiénes somos</li></a>
                <a href=""><li>Términos y Condiciones</li></a>
                <a href=""><li>© 2024 KineHome - Todos los derechos reservados</li></a>
            </ul>
        </div>
    );
}

export default Footer;