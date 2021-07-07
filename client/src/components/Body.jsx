import React from "react";
import marmolblanco from "../images/marmolblanco.jpg";
import marmolnegro from "../images/marmolnegro.jpg";


const Body = () => {
  return (   
    <div className="LandingBody">
      <div className="FondoBody">
        <div className="TextWrapper">
          <h1 className="Text1">LA</h1>
          <h1 className="Text2">INNOVACION De</h1>
          <h1 className="Text3">BIENES RAÍCES</h1>
          <h1 className="Text4"></h1>
        </div>
        <div className="TextWrapper2"></div>
        <div className="ImgWrapper"></div>
      </div>
    </div>
   
    /* <div className="UpBodyBox">
        <img src={marmolnegro} className="MarmolNegro" alt="marmol1"></img>
      </div>
      <div className="LowBodyBox">
        <img src={marmolblanco} className="MarmolBlanco" alt="marmol2"></img>
      </div> */
  );
};

export default Body;
