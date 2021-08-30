import React from 'react'
import { Link } from "react-router-dom";
import logo from "../Fotos/logonegro.png"
import Face from "../Fotos/IconoFacebook.png"
import Inst from "../Fotos/IconoInstagram.png"
import TikTok from "../Fotos/IconoTikTok.png"
import YouTube from "../Fotos/IconoYT2.png"

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
                    {/* <div className="endTitle">Nuestras Redes</div> */}
                    {/* <div className="iconos">
                        <a  href="https://www.facebook.com/monroyrealestate/"><img src={Face} alt="Face"/></a>
                        <a href="https://www.instagram.com/monroy.realestate/"><img src={Inst} alt="Instagram"/></a>
                        <a href="https://www.tiktok.com/@monroyrealestate?lang=es"> <img src={TikTok} alt="TikTok"/></a>
                        <a href="https://www.youtube.com/channel/UCtYt-1mMzGcOP_gH_0OgJMw"><img src={YouTube} alt="YouTube"/></a>
                    </div> */}
                </div>
            </div>
            <div>Sitio web diseñado por &#8918;Insert Name&#8919; </div>
        </div>
    )
}
export default EndBar