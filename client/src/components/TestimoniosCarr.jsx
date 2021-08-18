import React, { Fragment, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const TestimoniosCarr = () => {
  const DatosTestimonios = [
    {
      Frase: "Hola me llamo Tony",
      Autor: "Tony",
    },

    {
      Frase: "woof",
      Autor: "Cumpleaños",
    },

    {
      Frase: "*ladridos*",
      Autor: "Botas",
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
    <div className="Testimonios">
      <div className="titulo-flex">
        <div>
          <h2 className="numero">04</h2>
          <h1 className="title">Testimonios</h1>
          <hr className="linea" />
        </div>
        </div>
      
      <div className="TestimoniosFlex">
  {DatosTestimonios.map((slide, index) => {
    return (
      <div
        className={index === current ? "slide active" : "slide"}
        key={index}
      >
        {index === current && (
          <div>
            <div className="frase">{`'${slide.Frase}'`}</div>
            <div className="autor">{`- ${slide.Autor}`}</div>
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


{/*  */}

export default TestimoniosCarr;
