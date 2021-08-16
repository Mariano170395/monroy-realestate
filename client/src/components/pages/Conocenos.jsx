import React from "react";
import quiene from '../../images/quienessomos.png';
import Conocen from '../Conocen.jsx';

const Conocenos = () => {
  return (
    <div>
      <Conocen/>
      <div className="ConTitle">¿Porque MONROY real estate?</div>
      <div className="ConGrid">
        <div className="Izquierda">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">Asesoría Integral</div>
            <div className="concont">Revisamos a fondo tus necesidades para ayudarte con todos los aspectos de la renta o venta de tu inmueble</div>
         </div>
        </div>
        <div className="Derecha">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">Excelente atención</div>
            <div className="concont">Te brindamos un servicio inmobiliario de un alto estándar de calidad y de acuerdo a tus requerimientos</div>
         </div>
        </div>
        <div className="Izquierda">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">Procesos optimizados</div>
            <div className="concont">Formamos parte de la Asociación Mexicana de Profesionales Inmobiliarios (AMPI), lo que implica haber pasado por un proceso estricto de selección para garantizar nuestra operación y brindarle a usted seguridad y confianza en todos y cada uno de los trámites que realices con nosotros</div>
         </div>
        </div>
        <div className="Derecha">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">Eficacia</div>
            <div className="concont">Nuestro equipo está capacitado para responder todas tus solicitudes de la mejor manera y en el menor tiempo posible, con todo el profesionalismo, respeto y seriedad que mereces</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
