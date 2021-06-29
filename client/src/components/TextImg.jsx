import React from "react";
import isotipo from "../images/isotipo.png";

const TextImg = () => {
  return (
    <div>
      <div className="TextWrapper">
        <h3 className="Text-1">LA</h3>
        <h3 className="Text-2">INNOVACION DE</h3>
        <h3 className="Text-3">BIENES RAICES</h3>
        <h3 className="Text-4">EMPIEZA AQUI</h3>
      </div>
      <div>
        <div className="ImgWrapper">
          <img src={isotipo} alt='Isotipo'></img>
        </div>
      </div>
    </div>
  );
};

export default TextImg;
