import React from 'react'
import emailjs from "emailjs-com"

const Contacto = () => {

    function sendEmail (e){
        e.preventDefault();

        emailjs.sendForm(
            'service_6732cad', 
            'template_n7jledn', 
            e.target, 
            'user_tvSW5gG9Gc432QuyoBnyx'
        ).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err)) 
    }

    return (
        <div className="contact">
            <div className="titulo-flex">
                <div>
                    <h2 className="numero">08</h2>
                    <h1 className="title">CONTACTO</h1>
                    <hr className="linea"/>
                </div>
            </div>
            <form onSubmit={sendEmail}>
            <div className="cont-grid">
                    <input type="text" name="nombre" className="nombre"  placeholder="Nombre *"></input>
                    <input type="text" name="apellidos" className="apellidos"  placeholder="Apellidos *"></input>
                    <input type="email" name="emailUsuario" className="correo"  placeholder="e-mail *"></input>
                    <input type="number" name="numTelefono" className="telefono"  placeholder="Telefono *"></input>
                    <textarea type="text" name="mensaje" className="mensaje"  placeholder="Mensaje"></textarea>
                    <button className="enviar" type="submit">Enviar</button>
            </div>
            </form>
        </div>
    )
}
export default Contacto