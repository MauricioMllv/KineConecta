import React, { useState, useEffect } from 'react';


const Sections = () => {

    const handleImageClick = () => {
        alert('Solicita tu informe kinesico al correo solicitud@gmail.com');
    };

    return (
        <div className="flex justify-center items-center py-5 md:py-16">
            <div className="px-4">
                <section className="inline-block m-4">
                    <a href="/agendartuhora">
                        <button className='bg-[#084d6e] hover:bg-[#367dab] text-white py-2 px-4 rounded text-2xl w-80'><i class="fa-solid fa-calendar-check mr-2"></i>RESERVA DE HORA</button>
                    </a>
                </section>
                <section className="inline-block m-4">
                    <a href="">
                        <button className='bg-[#084d6e] hover:bg-[#367dab] text-white py-2 px-4 rounded text-2xl w-80'><i class="fa-solid fa-hand-holding-heart mr-2"></i>SERVICIOS</button>
                    </a>
                </section>
                <section className="inline-block m-4">
                    <a href="/" onClick={handleImageClick}>
                        <button className='bg-[#084d6e] hover:bg-[#367dab] text-white py-2 px-4 rounded text-2xl w-80'><i class="fa-solid fa-file-lines mr-2"></i>SOLICITUD INFORMES</button>
                    </a>
                </section>
                
            </div>
        </div>

    );
}

export default Sections;