import React from "react";
import { Link } from "react-router-dom";

const Conocen = () => {
  return (
    <div>
      <div className="prueba"></div> 
      <div className="Top">
        <div className="TopBack"></div>
        <div className="TopMenu">
          <div className="espacio"></div>
          <Link to="/conocenos" className="Conoce">¿Porque MONROY real estate?</Link>
          <Link to="/conocenos2" className="Conoce">Asesores Inmobiliarios</Link>
          <Link to="/conocenos3" className="Conoce">Mision</Link>
          <Link to="/conocenos4" className="Conoce">Nuestros Servicios</Link>
          <div className="espacio"></div>
        </div>
      </div>
    </div>
  );
};

export default Conocen;
