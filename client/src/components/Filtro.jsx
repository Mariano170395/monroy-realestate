import React from 'react'

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
                    <button className="contAg">Contactar Agente</button>
                    <button className="contAg">Contactar Agente</button>
                    <button className="contAg">Contactar Agente</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Filtro
