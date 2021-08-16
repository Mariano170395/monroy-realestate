import React from "react";
import quiene from '../../images/quienessomos.png';
import Conocen from '../Conocen.jsx';

const Conocenos = () => {
  return (
    <div>
      <Conocen/>
      <div className="ConTitle">Nuestros Servicios</div>
      <div className="ConGrid">
        <div className="Izquierda">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">FINANCIAMIENTOS & CREDITOS</div>
            <ul className="concont">GESTIÓN DE CRÉDITOS HIPOTECARIOS
              <li className="concont">Compra de Vivienda Nueva o Usada</li>
              <li className="concont">Mejora o Sustitución de Hipoteca</li>
              <li className="concont">Crédito de Preventa</li>
              <li className="concont">Crédito de Terreno</li>
              <li className="concont">Gestión de créditos hipotecarios para la construcción de tu casa</li>
              <li className="concont">Gestión de permisos y trámites</li>
              <li className="concont">Seguimiento hasta la entrega de tu casa</li>
            </ul>
         </div>
        </div>
        <div className="Derecha">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">INMOBILIARIA</div>
            <ul className="concont">COMPRA Y VENTA DE INMUEBLES
              <li className="concont">Búsqueda especializada de propiedades sobre requerimientos específicos</li>
              <li className="concont">Casas y Departamentos: A partir de 2 millones en adelante</li>
              <li className="concont">Terrenos: Ejidales y con Título de propiedad</li>
              <li className="concont">Bodegas</li>
              <li className="concont">Locales comerciales</li>
            </ul>
         </div>
        </div>
        <div className="Izquierda">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">INVERSIONES</div>
            <ul className="concont">
              <li className="concont">Cartera de propiedades en Remate Bancario</li>
              <li className="concont">Análisis de viabilidad de inversión y asesoramiento Legal y Comercial</li>
              <li className="concont">Inversión en Ganancias de Capital (Crowfunding) en México y Estados Unidos con rendimiento de hasta un 30% anual.</li>
            </ul>
         </div>
        </div>
        <div className="Derecha">
          <img className="conImg" src={quiene} alt="alt"></img>
          <div className="conText">
            <div className="contitu">CONSTRUCCIONES</div>
            <ul className="concont">
              <li className="concont">Búsqueda y selección y selección de terrenos</li>
              <li className="concont">Gestión de créditos hipotecarios para la construcción de tu casa</li>
              <li className="concont">Gestión de permisos y trámites</li>
              <li className="concont">Seguimiento hasta la entrega de tu casa</li>
            </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
