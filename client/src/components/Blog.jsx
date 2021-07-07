import React from "react";
import marmolnegro from "../images/marmolnegro.jpg";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="BlogMarmol">
      <div className="ContenedorGral">
        <div className="TituloFlex">
          <div>
            <h2 className="Numero">02</h2>
            <h1 className="TituloBlog">TENDENCIAS</h1>
            <hr className="LineaBlog"></hr>
          </div>
        </div>
        <div className="ContenedorHrz1">
          <div className="CuadroBlog1">
            <div className="ContenedorImg1"></div>
            <div className="leer1">
              <h1>Leer Más</h1>
            </div>
          </div>
        </div>
        <div className="ContenedorHrz2">
          <div className="CuadroBlog2">
            <div className="ContenedorImg2"></div>
            <div className="leer2">
              <h1>Leer Más</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;
