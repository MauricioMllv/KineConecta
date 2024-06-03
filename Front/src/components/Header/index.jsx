import React, { useState, useEffect } from 'react';
import images1 from '../../assets/img/4.png';
import images2 from '../../assets/img/2.png';
import images3 from '../../assets/img/3.png';
import right from '../../assets/img/right.png';
import left from '../../assets/img/left.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [images1, images2, images3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    
    <div className="flex items-center justify-center max-w-full">
      <button className='hidden md:block relative left-5 md:left-10 transform -translate-y-1/2 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 active:bg-gray-500' onClick={prevSlide}><img className='size-6 md:size-8' src={left} alt="" /></button>
      <div className="slide w-full h-[100px] md:h-[335px] bg-contain overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      {/* revisay alturas y anchos para diferentes pantallas  */}
      </div>
      <button className='hidden md:block relative right-5 md:right-10 transform -translate-y-1/2 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 active:bg-gray-500' onClick={nextSlide}><img className='size-6 md:size-8' src={right} alt="" /></button>
    </div>
  );
};

export default Carousel;