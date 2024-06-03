import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img/1.png'
import img2 from '../../assets/img/logo.png'
import img3 from '../../assets/img/logo-nav.png'

const Appointment = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        img1,
        img2,
        img3
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="w-1/4">
                    <img
                        src={images[currentImageIndex]}
                        alt="Imagen grande"
                        className="w-full h-auto border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="w-1/4 p-4">
                    <div className="mb-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className={`w-1/3 h-auto m-2 border border-gray-300 rounded-lg ${index === currentImageIndex ? 'border-blue-500' : ''
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>

                </div>
                <div className='flex flex-col'>
                    <button className="m-2 px-4 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">
                        Agendar Hora
                    </button>
                    <button className="m-2 px-4 py-2 bg-[#D6A83E] text-white rounded-md hover:bg-[#BF922F] focus:outline-none focus:bg-[#BF922F]">
                        Modificar Hora
                    </button>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center p-10 mx-10'>
                <p className='text-balance text-base mx-10 px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur iste doloribus assumenda odio sunt tempore ea officiis vero modi quaerat, esse, accusantium tempora quisquam alias dicta neque perspiciatis facere sapiente adipisci excepturi. Dignissimos sint voluptatem eligendi ut architecto, neque minima? Voluptates porro soluta, maiores neque molestias vero blanditiis, pariatur assumenda cum quam minima, reiciendis rerum. Reiciendis laborum quasi laboriosam natus soluta eligendi incidunt harum praesentium ad. Velit, commodi in! Delectus suscipit incidunt culpa enim libero quis consequuntur vel voluptates ut repellat reiciendis eos nemo temporibus dolore quam perferendis dolor voluptatibus unde atque non, sed magni sapiente consectetur soluta. Nostrum perferendis possimus aliquid dolorum porro, inventore velit eius quae sint voluptate incidunt quas saepe quo laborum hic sed ratione nulla eligendi numquam non libero praesentium perspiciatis molestias quos? Amet fugit aliquid excepturi delectus ipsum consectetur, obcaecati laborum voluptas recusandae maiores rerum veritatis a saepe blanditiis iusto dolore explicabo dolor numquam!</p>
            </div>
        </section>
    )
}

export default Appointment;