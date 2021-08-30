import React from "react";
import image1 from "../../Galeria/img1.jpg";
import image2 from "../../Galeria/img2.jpg";
import image3 from "../../Galeria/img3.jpg";
import { Link } from "react-router-dom";

const Conocenos = () => {
  return (
    <div>
      <div className="prueba">Artículo1</div> 
      <div className="im1Art">
        <div className="pieDeImg1">Pie de imagen Pie de imagen Pie de imagen Pie de imagen Pie de imagen Pie de imagen Pie de imagen </div>
      </div>
      <div className="contArt">
        <div className="infoArt">
          <div className="fechaArt1">17/06/2021</div>
          <div className="tituloArt">Este es un titulo inecesariamente largo para medir espacios</div>
          <div className="espArt"></div>
          <div className="im2Art"></div>
          <div className="pieIm2"> Este es el pie de foto de la foto 2 Este es el pie de foto de la foto 2 Este es el pie de foto de la foto 2 Este es el pie de foto de la foto 2 </div>
        </div>
        <div className="nota">
        Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota 
        Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota 
        Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota 
        Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota 
        Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota 
        Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota Nota 
        </div>
      </div>
      <div className="secArt">Mas Articulos</div>
      <div className="masArt">
        <Link className="linkArt" to="/articulo2">
          <div className="titArt">
            <div className="titArt1"></div>
            <div className="titArt2">Titulo artículo2 Titulo artículo2 Titulo artículo2</div>
          </div>
          <img src={image1} alt="/" className="imart"></img>
        </Link>
        <Link className="linkArt" to="/articulo3">
          <div className="titArt">
            <div className="titArt1"></div>
            <div className="titArt2">Titulo artículo3</div>
          </div>
          <img src={image2} alt="/" className="imart"></img>
        </Link>
        <Link className="linkArt" to="/articulo4">
          <div className="titArt">
            <div className="titArt1"></div>
            <div className="titArt2">Titulo artículo4</div>
          </div>
          <img src={image3} alt="/" className="imart"></img>
        </Link>
      </div>
    </div>
  );
};

export default Conocenos;
