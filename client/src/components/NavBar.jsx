import React from "react";
import logobueno from "../images/logobueno.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navi-FlexWrap">
      <div className="Navi-FlexLgo">
        <img className="Logo-1" src={logobueno} alt="Logo" />
        <div className="Navi-FlexBtn">
        <div class="DropProp">
            <Link class="DropBtnProp" to="/">
              Home
            </Link>
          </div>

          <div class="DropProp">
            <button class="DropBtnProp">PROPIEDADES</button>
            <div class="DropdownSubProp">
              <Link to="/comprar">Comprar</Link>
              <Link to="/rentar">Rentar</Link>
              <Link to="/oportunidades">Oportunidades</Link>
              <Link to="/vender">Vender</Link>
            </div>
          </div>

          <div class="DropProp">
            <button class="DropBtnProp">CONÓCENOS</button>
            <div class="DropdownSubProp">
              <a href="#">¿Porque MONROY?</a>
              <a href="#">Asesores Inmobiliarios</a>
              <a href="#">Mision</a>
              <a href="#">Nuestros Servicios</a>
            </div>
          </div>

          <div class="DropProp">
            <Link class="DropBtnProp" to="/contacto">
              CONTACTO
            </Link>
          </div>

          <div class="DropProp">
            <Link class="DropBtnProp" to="/blog">
              BLOG
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
