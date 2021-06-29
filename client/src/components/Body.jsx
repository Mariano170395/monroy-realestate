import React from "react";
import marmolblanco from "../images/marmolblanco.jpg";
import marmolnegro from "../images/marmolnegro.jpg";

const Body = () => {
  return (
    <div>
      <div className="UpBodyBox">
      <img src={marmolnegro} className='MarmolNegro' alt='marmol1'></img>
      </div>
      <div className="LowBodyBox">
        <img src={marmolblanco} className='MarmolBlanco' alt='marmol2'></img>
      </div>
    </div>
  );
};

export default Body;
