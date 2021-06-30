import React from "react";
import isotipoblanco from '../images/isotipoblanco.png'

const QuienesText = () => {
  return (
    <div className="QuienesTextBackground">
      <div>
          <img src={isotipoblanco} className='IsotipoQuienes'></img>
      </div>
      <div className='QuienesWrapper'>
      <div className='QuienesContainer1'>
          <p className='TextQuienes'>Texto1</p>
      </div>
      <div className='QuienesContainer2'></div>
      <div className='QuienesContainer3'></div>
      <div className='QuienesContainer4'></div>
      </div>
    </div>
  );
};

export default QuienesText;
