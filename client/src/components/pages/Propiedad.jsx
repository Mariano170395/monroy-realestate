import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Propiedad = () => {
  const [image, setImage] = useState({
    title: "",
    url: "",
    _id: "",
  });
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/images/${params.id}`);
      setImage(res.data);
    })();
  });

  
  return (
    <div>
      <div className="Separador"></div>
      <div className='PropiedadWrapper'>
        <img src={image.url} alt={image.title} className="Casa"></img>
        <div className="InformacionProp">
            <div className='IsotipoProp'>
        <div className="InfoGrande">
        <h1 className='TituloProp'>{image.title}</h1>
        <h1 className="PrecioProp">{`$${image.precio}`}</h1>
        </div>
        <div className="InfoChica">
        <h1 className="BanosProp">{`Baños: ${image.banos}`}</h1>
        <h1 className="HabitacionesProp">{`Habitaciones: ${image.habitaciones}`}</h1>
        </div>
        </div>
        </div>
        <div className="Separador"></div>
        <div className='Galeria'>
          <button onClick={()=>history.push(`/comprar/${image._id}/ver-mas`)}>Ver mas</button>
        </div>
      </div>
      <h1>{image.prioridad}</h1>
      <h1>{image.descripcion}</h1>
      <h1>{image.estatus}</h1>
      
      <h1>{image.precio}</h1>
      <h1>{image.colonia}</h1>
    </div>
  );
};

export default Propiedad;
