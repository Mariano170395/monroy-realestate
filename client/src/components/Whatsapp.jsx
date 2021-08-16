import React from "react";

const Whatsapp = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=5217223509058&text=Hola%20seyor%20Mariano%20le%20escribo%20de%20parte%20de%20Monroy%20RealEstate"
        className="float"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
