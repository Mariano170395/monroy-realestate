import React, { Fragment, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const QuienesText = () => {
  const DatosTestimonios = [
    {
      Frase: "Somos la empresa #1 dedicada a innovar el sector inmobiliario.",
    },

    {
      Frase: "Estamos dedicados a la intermediación inmobiliaria, y la asesoría legar correcta para proteger tu patrimonio.",
    },

    {
      Frase: "Nuestra área de remodelación se encarga de organizar y optimizar todas las partes para mejorar tu propiedad y acelerar su venta.",
    },
    {
      Frase: "Tu propiedad tendrá la mejor y mayor difusión , gracias a nuestro equipo dedicado a conseguir la híper segmentación y las estadísticas necesarias para llegar a los compradores y vendedores correctos.",
    },
    {
      Frase: "Contamos con video recorrido , drone activo , y fotografías profesionales que harán lucir tu propiedad.",
    },

  ];

  const [current, setCurrent] = useState(0);
  const length = DatosTestimonios.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(DatosTestimonios) || DatosTestimonios.length <= 0) {
    return null;
  }

  return (
    <>
    <div className="QuienesTextWrap">
      <div className="QuienesFlex">
  {DatosTestimonios.map((slide, index) => {
    return (
      <div
        className={index === current ? "slide active" : "slide"}
        key={index}
      >
        {index === current && (
          <div>
            <div className="FraseQuienes">{`${slide.Frase}`}</div>
          </div>
        )}
      </div>
    );
  })}
</div>
<div className='BotonesFlex'>
<FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />
<FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />
</div>
</div>

    </>
  );
};



export default QuienesText;
