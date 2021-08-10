import React from "react";
import isotipoblanco from "../images/isotipoblanco.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import tiktok from "../images/tiktok.png";

const Redes = () => {
  return (
    <div className="RedesBackground">
      <div className="TituloRedes">
        <div className="TituloFlex2">
          <div>
            <h2 className="NumeroRedes">07</h2>
            <h1 className="TituloRedes">NUESTRAS REDES</h1>
            <hr className="LineaRedes"></hr>
          </div>
        </div>
      </div>
      <div className="RedesDivision">
        <div className="ContenedorIsotipo"></div>
        <div className="ContenedorRedes">
          <div className="RedesCont"><img src={facebook} className='facebooklogo' alt='facebook'></img><a href="https://www.facebook.com/monroyrealestate/" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><img src={instagram} className='instagramlogo' alt=''></img><a href="https://www.instagram.com/monroy.realestate/" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><img src={youtube} className='youtubelogo' alt=''></img><a href="#" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><img src={tiktok} className='tiktoklogo' alt=''></img><a href="#" className="RedesSociales">Monroy Real Estate</a></div>
        </div>
      </div>
    </div>
  );
};

export default Redes;
