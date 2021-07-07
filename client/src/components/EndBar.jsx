import React from 'react'
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
                        <li>Propiedades</li>
                        <li>Conocenos</li>
                        <li>Contacto</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="endCol3">
                    <div className="endTitle">Contacto</div>
                    <div className="mail">monroyrealestate@realestate.com</div>
                    <div className="endTitle">Nuestras Redes</div>
                    <div className="iconos">
                        <img src={Face} alt="Face"/>
                        <img src={Inst} alt="Instagram"/>
                        <img src={TikTok} alt="TikTok"/>
                        <img src={YouTube} alt="YouTube"/>
                    </div>
                </div>
            </div>
            <div>Sitio web diseñado por &#8918;Insert Name&#8919; </div>
        </div>
    )
}
export default EndBar