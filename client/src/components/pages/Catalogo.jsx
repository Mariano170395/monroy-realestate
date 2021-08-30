import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Catalogo = () => {
  const [images, setImages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/images");
      setImages(res.data);
    })();
  }, []);

  const [busqueda, setBusqueda] = useState('');
  /*Empieza*/
  const [baños, setBaños] = useState('');
  const [habitaciones, setHabitaciones] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [precioMin, setPrecioMin] = useState('');
  /*Acaba*/
  
  return (
    <div>
      <div className="Separador"></div>
      <div>
        <h1 className="TituloRedes">Propiedades en Venta</h1>
        <hr className="LineaRedes"></hr>
        <div>
          <input type='text' placeholder='Colonia' className="Buscador"
          onChange={event=>{setBusqueda(event.target.value)}}/>
          
          {/*Empieza*/}
          <input type='number' placeholder='Baños' className="Buscador"
          onChange={event=>{setBaños(event.target.value)}}/>
          <input type='number' placeholder='Habitaciones' className="Buscador"
          onChange={event=>{setHabitaciones(event.target.value)}}/>
          <input type='number' placeholder='Precio Max' className="Buscador"
          onChange={event=>{setPrecioMax(event.target.value)}}/>
          <input type='number' placeholder='Precio Min' className="Buscador"
          onChange={event=>{setPrecioMin(event.target.value)}}/>
          {/*Acaba*/}
        </div>
      </div>
      <div className="WrapperCatalogo">
      {
        images.filter(image=>{
          if (image.colonia === (setBusqueda)){
            return <div> holiwiris1</div>
          } else if (image.colonia.includes(setBusqueda)){
            return  <div> holiwiris2</div>
          }
          return  <div> holiwiris3</div>
        }).map(image =>(

          image.estatus === 'Compra' && image.colonia.includes(busqueda) && (image.banos ===  parseInt(baños)|| baños === '') && (image.habitaciones ===  parseInt(habitaciones)|| habitaciones === '')  && (precioMin === '' || image.precio >= parseInt(precioMin)) && (image.precio <= parseInt(precioMax) || precioMax === '') ? (

          <div  onClick={()=>history.push(`/comprar/${image._id}`)} key={image._id}>
            <img src={image.url} alt="a" className="Item"/>
          </div>
        ) : <div></div>


        ))
      
      }
      </div>
    </div>
  );
};

export default Catalogo;
