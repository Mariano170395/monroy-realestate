import React from 'react'
import { Link } from "react-router-dom";
import logo from "../Fotos/logonegro.png"
// import Face from "../Fotos/IconoFacebook.png"
// import Inst from "../Fotos/IconoInstagram.png"
// import TikTok from "../Fotos/IconoTikTok.png"
// import YouTube from "../Fotos/IconoYT2.png"

const EndBar = () => {
    return (
        <div className="endBar">
            <div className="endFlex">
                <div className="endCol1">
                    <img className="endLogo" src={logo} alt="Logo"/>
                    <div className="oficina"> Avenida Siempreviva #745, Springfield, Estados Unidos</div>
                </div>
                <div className="endCol2">
                    <ul className="menu">
                        <li><Link className="DropBtnProp" to="/comprar">PROPIEDADES</Link></li>
                        <li><Link className="DropBtnProp" to="/conocenos">CONÓCENOS</Link></li>
                        <li><Link className="DropBtnProp" to="/contacto">CONTACTO</Link></li>
                        <li><Link className="DropBtnProp" to="/blog">BLOG</Link></li>
                        
                        
                    </ul>
                </div>
                <div className="endCol3">
                    <div className="endTitle">Contacto</div>
                    <div className="mail">monroyrealestate@realestate.com</div>
                </div>
            </div>
            <div>Sitio web diseñado por &#8918;Insert Name&#8919; </div>
        </div>
    )
}
export default EndBar