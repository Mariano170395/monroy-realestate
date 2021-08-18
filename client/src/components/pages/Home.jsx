import React from "react";
import Tendencias from "../Tendencias.jsx";
import Filtro from "../Filtro.jsx";
import Fondo from "../Fondo.jsx";
import Contacto from "../Contacto.jsx";
/*Mariano*/
import Body from "../Body";
import BodyQuienes from "../BodyQuienes";
import QuienesText from "../QuienesText";
import Blog from "../Blog";
import Redes from "../Redes";
import TestimoniosCarr from "../TestimoniosCarr.jsx";

const Home = () => {
  return (
    <div>
      {/*Mariano*/}
      <Body />
      {/*Tony*/}
      <div className="tend-grid">
        <Fondo />
        <Tendencias />
      </div>
      {/*Mariano*/}
       <BodyQuienes />  
       {/* <QuienesText /> */}
      {/*Tony*/}
      <Filtro />
      <TestimoniosCarr />
      {/*Mariano*/}
       <Blog />
       <Redes /> 
      {/*Tony*/}
       <Contacto /> 
    </div>
  );
};

export default Home;
