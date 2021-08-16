import React, {useState, useEffect} from "react";
import axios from 'axios'

const Catalogo = () => {

  const [images, setImages] = useState([])

  useEffect( async () => {
    const res = await axios.get('/api/images')
    console.log(res)
    setImages(res.data)
  }, []);

  return (
    <div>
        {images.map(image =>(
          <div>
            <img src={image.url} alt=""/>
          </div>
        ))}
    </div>
  );
};

export default Catalogo;
