import React from "react";
import Tendencias from "../Tendencias.jsx";
import Filtro from "../Filtro.jsx";
import Fondo from "../Fondo.jsx";
import Testimonios from "../Testimonios.jsx";
import Contacto from "../Contacto.jsx";
import EndBar from "../EndBar.jsx";
/*Mariano*/
import NavBar from "../NavBar";
import Body from "../Body";
import TextImg from "../TextImg";
import BodyQuienes from "../BodyQuienes";
import QuienesText from "../QuienesText";
import Blog from "../Blog";
import Redes from "../Redes";
import Galeria from "../Galeria.jsx";

const Home = () => {
  return (
    <div>
      {/*Mariano*/}
      {/* <NavBar /> */}
      <Body />
      {/* <TextImg />
      {/*Tony*/}
      <div className="tend-grid">
        <Fondo />
        <Tendencias />
      </div>
      {/*Mariano*/}
       <BodyQuienes />  
       <QuienesText />
      {/*Tony*/}
      <Filtro />
      {/* <Testimonios />
      {/*Mariano*/}
       <Blog /> 
       <Redes /> 
      {/*Tony*/}
       <Contacto /> 
       <EndBar />
      
    </div>
  );
};

export default Home;
