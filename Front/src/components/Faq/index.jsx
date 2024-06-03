import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: '¿Qué es Lorem Ipsum?',
      answer: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
    },
    {
      question: '¿Por qué lo usamos?',
      answer: 'Se usa ampliamente en la tipografía y diseño como texto de muestra.'
    },
    {
      question: '¿De dónde viene?',
      answer: 'Viene de las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum".'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-5">
      <h2 className="text-3xl mb-4">Preguntas frecuentes</h2>
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 text-base mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
