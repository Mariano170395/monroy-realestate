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
            <div className="filt-flex">
                <div className="filtText">
                    <div className="filt-text1">¿No encuentras la casa que buscas en nuestro catálogo?</div>
                    <div className="filt-text2">¡Dejanos saber!</div>
                    <div className="filt-text3">Nosotros te ayudamos a encontrarla</div>
                    <button className="contAg">Contactar Agente</button>
                </div>
                <div className="filtBox">
                    <button className="bot-comp">COMPRA</button>
                    <button className="bot-rent">RENTA</button>
                    <button className="bot-vent">VENTA</button>
                    <div className="caja">
                        <select className="select" name="propiedad">
                            <option value="departamento">Departamento</option>
                            <option value="casa">Casa</option>
                            <option value="terreno">Terreno</option>
                        </select>
                        <input type="text" className="busc" name="buscador" placeholder="Ubicación, Asesor, Oficina, ID"></input>
                        <div className="advSer">Búsqueda Avanzada</div>
                        <div className="catConsul">Consultar catálogo completo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtro
