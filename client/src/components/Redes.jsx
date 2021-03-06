import React from "react";
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
          <div className="RedesCont"><a href="https://www.facebook.com/monroyrealestate/" className="RedesSociales"><img src={facebook} className='facebooklogo' alt='facebook'></img></a><a href="https://www.facebook.com/monroyrealestate/" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><a href="https://www.instagram.com/monroy.realestate/" className="RedesSociales"><img src={instagram} className='instagramlogo' alt=''></img></a><a href="https://www.instagram.com/monroy.realestate/" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><a href="https://www.youtube.com/channel/UCtYt-1mMzGcOP_gH_0OgJMw" className="RedesSociales"><img src={youtube} className='youtubelogo' alt=''></img></a><a href="https://www.youtube.com/channel/UCtYt-1mMzGcOP_gH_0OgJMw" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><a href="https://www.tiktok.com/@monroyrealestate?lang=es" className="RedesSociales"><img src={tiktok} className='tiktoklogo' alt=''></img></a><a href="https://www.tiktok.com/@monroyrealestate?lang=es" className="RedesSociales">Monroy Real Estate</a></div>
        </div>
      </div>
    </div>
  );
};

export default Redes;
