import React from 'react';
import logo from "../Fotos/isotiponegro.png"

const Tendencias = () => {
    return (
        <div className="tend">
            <div className="titulo-flex">
                <div>
                    <h2 className="numero">01</h2>
                    <h1 className="title">TENDENCIAS</h1>
                    <hr className="linea"/>
                </div>
            </div>
            <div className="tendencias-flex">
                <div className="fototendencias1">
                    <div className="infoD">
                        <div className="colonia">Colonia del Sol</div>
                        <div className="precio">$5,230,000 MXN</div>
                        <div className="info">
                            <div>700M2</div>
                            <div>4 Habitaciones</div>
                            <div>2 Baños</div>
                        </div>
                        <button className="boton"> Ver Más</button>
                    </div>
                    <div className="logoB">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </div>
                </div>
                <div className="vacioHor"></div>
                <div className="fototendencias2">
                    <div className="infoD">
                        <div className="colonia">Colonia del Sol</div>
                        <div className="precio">$5,230,000 MXN</div>
                        <div className="info">
                            <div>700M2</div>
                            <div>4 Habitaciones</div>
                            <div>2 Baños</div>
                        </div>
                        <button className="boton"> Ver Más</button>
                    </div>
                    <div className="logoB">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </div>
                </div>
                <div className="vacioHor"></div>
                <div className="fototendencias3">
                    <div className="infoD">
                        <div className="colonia">Colonia del Sol</div>
                        <div className="precio">$5,230,000 MXN</div>
                        <div className="info">
                            <div>700M2</div>
                            <div>4 Habitaciones</div>
                            <div>2 Baños</div>
                        </div>
                        <button className="boton"> Ver Más</button>
                    </div>
                    <div className="logoB">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tendencias
