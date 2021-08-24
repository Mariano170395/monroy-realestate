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
  

  return (
    <div>
      <div className="Separador"></div>
      <div>
        <h1 className="TituloRedes">Propiedades en Venta</h1>
        <hr className="LineaRedes"></hr>
        <div>
          <input type='text' placeholder='Buscar' className="Buscador"
          onChange={event=>{setBusqueda(event.target.value)}}
          />
        </div>
      </div>
      <div className="WrapperCatalogo">
      {
        
        images.filter((image)=>{
          if (busqueda == ""){
            return 
          } else if (image.colonia.includes(setBusqueda)){
            return 
          }
        }).map(image =>(

          image.estatus === 'Compra' ? (

          <div  onClick={()=>history.push(`/comprar/${image._id}`)} key={image._id}>
            <img src={image.url} alt="" className="Item"/>
            
          </div>
        )
        : <></>
        ))
      
      }
      </div>
    </div>
  );
};

export default Catalogo;
