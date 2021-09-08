import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Espacio from "../Espacio";
import isotipoblanco from '../../images/isotipoblanco.png'
import emailjs from "emailjs-com"

const Propiedad = () => {
  const [image, setImage] = useState({
    title: "",
    url: "",
    _id: "",
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/images/${params.id}`);
      setImage(res.data);
    })();
  });

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
    <div>
      <Espacio/>
      <div className='PropiedadWrapper'>
        <img src={image.url} alt={image.title} className="CasaProp"></img>
         <div className="InformacionProp">
           <div className="IsotipoProp">
              <img src={isotipoblanco} className='isotipoProp'/>
           </div>
           <div className='InformacionFlex'>
              <div className="InfoGrande">
          <h1 className='TituloProp'>casa </h1>
          <h1 className="PrecioProp">{`$${image.precio}`}</h1>
          </div>
          <div className="InfoChica">
        <h1 className="BanosProp">{`Baños: ${image.banos}`}</h1>
        <h1 className="HabitacionesProp">{`Habitaciones: ${image.habitaciones}`}</h1>
        </div>
           </div>
        </div>
        <div className='Galeria'> 
        </div> 
      </div>
      <div className="titulo-flex">
                <div>
                    <h1 className="title">INFORMACIÓN</h1>
                    <hr className="linea"/>
                </div>
                </div>
      <div className='InformacionProp2'>
        <div className='DescripcionProp'>
          <h1>{image.title}</h1>
          <p>{image.descripcion} Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi, explicabo excepturi sit repellendus ipsum deleniti rem odio accusantium et qui harum id ad illo amet quibusdam. Repellendus, minus corrupti.</p>
        </div>
        <div className='InfoChicaProp'>
          <h1>Datos de la Propiedad</h1>
          <h2>{`Colonia: ${image.colonia}`}</h2>
          <h2>{`Número de habitaciones: ${image.habitaciones}`}</h2>
          <h2>{`Número de baños: ${image.banos}`}</h2>
          <h2>{`Tamaño de la propiedad: ${image.banos} m2`}</h2>
        </div>
      {/* <h1>{image.descripcion}</h1>
      <h1>{image.estatus}</h1>
      
      <h1>{image.precio}</h1>
      <h1>{image.colonia}</h1> */}
      </div>
      <div className="ContactoProp">
        <div className='TextoPropInfo'>
          <h1 className='Interesa'>Te interesa esta propiedad?</h1>
          <h1 className='Contactanos'>Contactanos!</h1>
          <h1 className='Ayudamos'>Con gusto te ayudamos</h1>
        </div>
        <form className='ContactoInfo'onSubmit={sendEmail}>
          
            <input type="text" name="nombre" className="Btnnombre"  placeholder="Nombre *" required></input>
            <input type="text" name="apellidos" className="Btnapellidos"  placeholder="Apellidos *" required></input>
            <input type="email" name="emailUsuario" className="Btncorreo"  placeholder="E-mail *" required></input>
            <input type="number" name="numTelefono" className="Btntelefono"  placeholder="Telefono *" required></input>
            <textarea type="text" name="mensaje" className="Btnmensaje"  placeholder="Mensaje"></textarea>
            <button className="Btnenviar" type="submit" onClick={()=>{ alert('Gracias, se ha enviado tu mensaje. Nos contactaremos contigo pronto'); }}>Enviar</button>
          
        </form>
      </div>

    </div>
  );
};

export default Propiedad;
