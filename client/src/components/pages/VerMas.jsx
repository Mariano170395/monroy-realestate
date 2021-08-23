import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const VerMas = () => {

        const [images, setImages] = useState([]);
        const history = useHistory();
      
        useEffect(() => {
          (async () => {
            const res = await axios.get("/api/images");
            setImages(res.data);
          })();
        }, []);
      
      

    return (
        <div>
            <div className='Separador'>
                
            </div>
            <h1>Esto es Ver mas de</h1>
            <div className="WrapperCatalogo">
      {
        
        images.map(image =>(

          image.galeria === `${image.title} galeria` ? (

          <div  onClick={()=>history.push(`/comprar/${image._id}`)} key={image._id}>
            <img src={image.url} alt="" className="Item"/>
            
          </div>
        )
        : <></>
        ))
      
      }
      </div>
        </div>
    )
}

export default VerMas
