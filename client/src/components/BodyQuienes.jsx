import React from 'react'
import quienessomos from '../images/quienessomos.png'
import { Link } from "react-router-dom";

const BodyQuienes = () => {
    return (
      <div className="BackgroundQuienes">
        <div className="TranspQuienes"></div>
        <img src={quienessomos} className="ImgQuienes" alt='Quienes'></img>
        <div className="TextQuieContainer">
          <h6 className="NumQuienes">02</h6>
          <h2 className="QuienesSomos">¿Quiénes somos?</h2>
        </div>
        <div className="QuienesNav">
          <Link to="/conocenos" className="Conoce">¿Porque MONROY real estate?</Link>
          <Link to="/conocenos2" className="Conoce">Asesores Inmobiliarios</Link>
          <Link to="/conocenos3" className="Conoce">Mision</Link>
          <Link to="/conocenos4" className="Conoce">Nuestros Servicios</Link>
        </div>
      </div>
    );
}

export default BodyQuienes
