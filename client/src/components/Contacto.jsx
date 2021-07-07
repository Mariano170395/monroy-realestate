import React from 'react'

const Contacto = () => {
    return (
        <div className="contact">
            <div className="titulo-flex">
                <div>
                    <h2 className="numero">08</h2>
                    <h1 className="title">CONTACTO</h1>
                    <hr class="linea"/>
                </div>
            </div>
            <div className="cont-grid">
                <input type="text" className="nombre"  placeholder="Nombre *"></input>
                <input type="text" className="apellidos"  placeholder="Apellidos *"></input>
                <input type="text" className="correo"  placeholder="e-mail *"></input>
                <input type="text" className="telefono"  placeholder="Telefono *"></input>
                <textarea type="text" className="mensaje"  placeholder="Mensaje"></textarea>
                <button className="enviar">Enviar</button>
            </div>
        </div>
    )
}
export default Contacto