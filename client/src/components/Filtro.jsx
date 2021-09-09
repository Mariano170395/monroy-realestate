import React from 'react'
import { Link } from "react-router-dom";

const Filtro = () => {
    return (
        <div className="filt">
            <div className="titulo-flex">
                <div>
                    <h2 className="numero">03</h2>
                    <h1 className="title">¿EN QUE TE PODEMOS AYUDAR?</h1>
                    <hr className="linea"/>
                </div>
            </div>
            <div className='filtWrapper'>
                <div className='TextWrap'>
                    <div className="FiltText1">¿No encuentras lo  que buscas?</div>
                    <div className="FiltText2">¡Dejanos saber!</div>
                    <div className="FiltText3">Nosotros te ayudamos</div>
                </div>
                <div className='BtnWrap'>
                    <button className="contAg"><Link className="DropBtnProp" to="/comprar">Comprar</Link></button>
                    <button className="contAg"><Link className="DropBtnProp" to="/rentar">Rentar</Link></button>
                    <button className="contAg"><Link className="DropBtnProp" to="/oportunidades">Oportunidades</Link></button>
                    <button className="contAg"><Link className="DropBtnProp" to="/contacto">Contactar Agente</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Filtro
