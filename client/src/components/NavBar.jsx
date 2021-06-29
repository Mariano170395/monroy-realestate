import React from "react";
import logobueno from "../images/logobueno.png";
// import hambuger from "../images/hamburger.png";

const NavBar = () => {
  return (
    <div className="Navi-FlexWrap">
      <div className="Navi-FlexLgo">
        <img src={logobueno} className="Logo-1" alt='Logo' />
        <div className="Navi-FlexBtn">
          <button>PROPIEDADES</button>
          <button>CONOCENOS</button>
          <button>CONTACTO</button>
          <button>ARTICULOS</button>
        </div>
      </div>
    </div>
  );
};


export default NavBar;
