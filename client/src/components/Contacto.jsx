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
                    <input type="text" name="nombre" className="nombre"  placeholder="Nombre *" required></input>
                    <input type="text" name="apellidos" className="apellidos"  placeholder="Apellidos *" required></input>
                    <input type="email" name="emailUsuario" className="correo"  placeholder="E-mail *" required></input>
                    <input type="number" name="numTelefono" className="telefono"  placeholder="Telefono *" required></input>
                    <textarea type="text" name="mensaje" className="mensaje"  placeholder="Mensaje"></textarea>
                    <button className="enviar" type="submit" onClick={()=>{ alert('Gracias, se ha enviado tu mensaje. Nos contactaremos contigo pronto'); }}>Enviar</button>
            </div>
            </form>
        </div>
    )
}
export default Contacto