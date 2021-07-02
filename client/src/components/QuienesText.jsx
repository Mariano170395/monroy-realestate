import React from "react";
import isotipoblanco from '../images/isotipoblanco.png'

const QuienesText = () => {
  return (
    <div className="QuienesTextBackground">
      <div>
          <img src={isotipoblanco} className='IsotipoQuienes' alt="isotipoblanco"></img>
      </div>
      <div className='QuienesWrapper'>
      <div className='QuienesContainer'>
          <p className='TextQuienes'>Texto1</p>
      </div>
      <div className='QuienesContainer'></div>
      <div className='QuienesContainer'></div>
      <div className='QuienesContainer'></div>
      </div>
    </div>
  );
};

export default QuienesText;
