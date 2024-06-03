import { useEffect, useState } from 'react';
import LogoNav from './logo';
import { useImages } from '../../context/ImagesProvider';


const Navbar = () => {
    const {images, loadImages} = useImages();
  
    useEffect(() => {
      loadImages();
    }, []);

    function RenderImages() {
        return (
        <div className="">
          {images.map(images => (
            <LogoNav images={images} key={images.id} />
          ))}
        </div>
        )
    }
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="bg-[#084D6E] p-4 mb-5 md:mb-10 flex justify-between items-center">
                <RenderImages />
                <div className="lg:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
                <div
                    className={`${isMenuOpen
                            ? 'block flex flex-col items-center space-y-4'
                            : 'hidden'
                        } lg:flex lg:items-center lg:space-x-4 justify-end text-white`}
                >
                    <a href="/">Inicio</a>
                    <a href="/contact">Contacto</a>
                    <a href="/about">Nosotros</a>
                    <a href="/preguntas">FAQ</a>
                    <a href="">
                        <button className="px-2 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">
                            <i className="fa-brands fa-whatsapp fa-bounce"></i> Agendar Hora
                        </button>
                    </a>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;