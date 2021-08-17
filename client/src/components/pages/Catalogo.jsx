import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Catalogo = () => {

  const [images, setImages] = useState([])
  const history = useHistory()

  useEffect(  () => {
    (async () => {
    const res = await axios.get('/api/images');
    setImages(res.data);
    })()
  }, []);

  return (
    <div className="DivGaleria">
        {images.map(image =>(
          <div className='Galeria' onClick={()=>history.push(`/comprar/${image._id}`)} key={image._id}>
            <img src={image.url} alt="" className="Item"/>
          </div>
        ))}
    </div>
  );
};

export default Catalogo;
