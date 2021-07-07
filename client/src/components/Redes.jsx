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
          <div className="RedesCont"><img src={facebook} className='facebooklogo' alt='facebook'></img><a href="#" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><img src={instagram} className='instagramlogo' alt=''></img><a href="#" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><img src={youtube} className='youtubelogo' alt=''></img><a href="#" className="RedesSociales">Monroy Real Estate</a></div>
          <div className="RedesCont"><img src={tiktok} className='tiktoklogo' alt=''></img><a href="#" className="RedesSociales">Monroy Real Estate</a></div>
        </div>
      </div>
      {/* <div className="TextRedContainer">
        <h6 className="NumRed">07</h6>
        <h2 className="Redes">Nuestras Redes</h2>
      </div> */}
      {/* <div className='RedesIsoCont'>
        <img src={isotipoblanco} className='RedesIso'></img>
      </div>
      <div className='RedesContainer'>
        <div className='RedesCont'><img src={facebook} className='facebooklogo' alt='facebook'></img>
        <h5>Monroy Real Estate</h5>
        </div>
        <div className='RedesCont'><img src={instagram} className='instagramlogo' alt=''></img>
        <h5>Monroy Real Estate</h5>
        </div>
        <div className='RedesCont'><img src={youtube} className='youtubelogo' alt=''></img>
        <h5>Monroy Real Estate</h5>
        </div>
        <div className='RedesCont'><img src={tiktok} className='tiktoklogo' alt=''></img>
        <h5>Monroy Real Estate</h5>
        </div>
      </div> */}
    </div>
  );
};

export default Redes;
