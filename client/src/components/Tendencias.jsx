import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Tendencias = () => {

    const [images, setImages] = useState([])
    const history = useHistory()
  
    useEffect(  () => {
      (async () => {
      const res = await axios.get('/api/images');
      setImages(res.data);
      })()
    }, []);

    return (
        <div className="tend">
            <div className="titulo-flex">
                <div>
                    <h2 className="numero">01</h2>
                    <h1 className="title">TENDENCIAS</h1>
                    <hr className="linea"/>
                </div>
            </div>
            <div className="Tendencias">
                <div className="FondoTendencias">
                {
        
        images.map(image =>(

          image.prioridad === 'alta' ? (

          <div className='GaleriaTend' onClick={()=>history.push(`/comprar/${image._id}`)} key={image._id}>
            <img src={image.url} alt="" className="ItemTendencias"/>
            {/* <div>{image.prioridad}</div> */}
          </div>
        )
        : <></>
        ))
      
      }
                </div>
            </div>
            {/* <div className="tendencias-flex">
                <div className="fototendencias1">
                    <div className="infoD">
                        <div className="colonia">Colonia del Sol</div>
                        <div className="precio">$5,230,000 MXN</div>
                        <div className="info">
                            <div>700M2</div>
                            <div>4 Habitaciones</div>
                            <div>2 Baños</div>
                        </div>
                        <button className="boton"> Ver Más</button>
                    </div>
                    <div className="logoB">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </div>
                </div>
                <div className="vacioHor"></div>
                <div className="fototendencias2">
                    <div className="infoD">
                        <div className="colonia">Colonia del Sol</div>
                        <div className="precio">$5,230,000 MXN</div>
                        <div className="info">
                            <div>700M2</div>
                            <div>4 Habitaciones</div>
                            <div>2 Baños</div>
                        </div>
                        <button className="boton"> Ver Más</button>
                    </div>
                    <div className="logoB">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </div>
                </div>
                <div className="vacioHor"></div>
                <div className="fototendencias3">
                    <div className="infoD">
                        <div className="colonia">Colonia del Sol</div>
                        <div className="precio">$5,230,000 MXN</div>
                        <div className="info">
                            <div>700M2</div>
                            <div>4 Habitaciones</div>
                            <div>2 Baños</div>
                        </div>
                        <button className="boton"> Ver Más</button>
                    </div>
                    <div className="logoB">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Tendencias
