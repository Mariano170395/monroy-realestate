import React from "react";
import logobueno from "../images/logobueno.png";
// import hambuger from "../images/hamburger.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navi-FlexWrap">
      <div className="Navi-FlexLgo">
        <Link className="Logo-1" to="/">
          <img src={logobueno} className="Logo-1" alt="Logo" />
        </Link>
      <div className="Navi-FlexBtn">
          <div className="DropProp">
            <button className="DropBtnProp">PROPIEDADES</button>
            <div className="DropdownSubProp">
              <Link to="/comprar">Comprar</Link>
              <Link to="/rentar">Rentar</Link>
              <Link to="/oportunidades">Oportunidades</Link>
              <Link to="/vender">Vender</Link>
            </div>
          </div>

          <div className="DropProp">
            <Link className="DropBtnProp" to="/conocenos">CONÓCENOS</Link>
          </div>

          <div className="DropProp">
            <Link className="DropBtnProp" to="/contacto">CONTACTO</Link>
          </div>

          <div className="DropProp">
            <Link className="DropBtnProp" to="/blog">BLOG</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
