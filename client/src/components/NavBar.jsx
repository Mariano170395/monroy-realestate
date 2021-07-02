import React from "react";
import logobueno from "../images/logobueno.png";
// import hambuger from "../images/hamburger.png";

const NavBar = () => {
  return (
    <div className="Navi-FlexWrap">
      <div className="Navi-FlexLgo">
        <div className='HamContainer'>
          
        </div>
        <img src={logobueno} className="Logo-1" alt="Logo" />
        <div className="Navi-FlexBtn">

          <div class="DropProp">
            <button class="DropBtnProp">PROPIEDADES</button>
            <div class="DropdownSubProp">
              <a href="#">Comprar</a>
              <a href="#">Rentar</a>
              <a href="#">Oportunidades</a>
              <a href="#">Vender</a>
            </div>
          </div>

          <div class="DropProp">
            <button class="DropBtnProp">CONÓCENOS</button>
            <div class="DropdownSubProp">
              <a href="#">Compra</a>
              <a href="#">Venta</a>
              <a href="#">Oportunidades</a>
            </div>
          </div>

          <div class="DropProp">
            <button class="DropBtnProp">CONTACTO</button>
            <div class="DropdownSubProp">
              <a href="#">Compra</a>
              <a href="#">Venta</a>
              <a href="#">Oportunidades</a>
            </div>
          </div>

          <div class="DropProp">
            <button class="DropBtnProp">BLOG</button>
            <div class="DropdownSubProp">
              <a href="#">Compra</a>
              <a href="#">Venta</a>
              <a href="#">Oportunidades</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
