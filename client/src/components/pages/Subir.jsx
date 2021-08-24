import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'



const Subir = () => {

    //Para la imagen
    const [ file, setFile ] = useState()

    //Para el titulo
    const [ title, setTitle ] = useState()

    //Para descripcion
    const [ descripcion, setDescripcion ] = useState()

    //Para Banos
    const [ banos, setBanos ] = useState()

    //Para habitaciones
    const [ habitaciones, setHabitaciones ] = useState()

    //Para precio
    const [ precio, setPrecio ] = useState()

    //Para colonia
    const [ colonia, setColonia ] = useState()

    //Para el estatus
    const [ estatus, setEstatus ] = useState()

    //Para el estatus
    const [ tendencia, setTendencia ] = useState()

    //Para galeria
    const [ galeria, setGaleria ] = useState()


    const handleChange = (e) =>{
        setFile(e.target.files[0])
    }

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)

        //Envia los datos de mis variables aqui
        const formData = new FormData()

        formData.append('file', file)
        formData.append('title', title)
        formData.append('descripcion', descripcion)
        formData.append('banos', banos)
        formData.append('habitaciones', habitaciones)
        formData.append('precio', precio)
        formData.append('colonia', colonia)
        formData.append('estatus', estatus)
        formData.append('tendencia', tendencia)
        formData.append('galeria', galeria)

        //Peticion Post con axios
       const res = await axios.post('/api/images/upload', formData)
       console.log(res)
       history.push('/')
       
    }


    return (
        <div>
            <div className="Separador"></div>
            <div className="titulo-flex">
                <div>
                    <h1 className="title">SUBIR ARCHIVO</h1>
                    <hr className="linea"/>
                </div>
            </div>
            <form onSubmit ={handleSubmit}>
            <div>
                    <input type="text"   placeholder="Titulo" onChange={e => setTitle(e.target.value)}></input>
                    <input type="number" name="Banos"  placeholder="Baños" onChange={e => setBanos(e.target.value)}></input>
                    <input type="number" name="Habitaciones" placeholder="Habitaciones" onChange={e => setHabitaciones(e.target.value)}></input>
                    <input type="number" name="Precio" placeholder="Precio" onChange={e => setPrecio(e.target.value)}></input>
                    <input type="text" name="Colonia" placeholder="Colonia" onChange={e => setColonia(e.target.value)}></input>
                    <input type="text" name="Compra/Venta/Oportunidades" placeholder="Compra/Renta/Oportunidades" onChange={e => setEstatus(e.target.value)}></input>
                    <input type="text" name="Tendencia"   placeholder="Tendencia" onChange={e => setTendencia(e.target.value)}></input>
                    <input type="text" name="Galeria"   placeholder="Galeria" onChange={e => setGaleria(e.target.value)}></input>
                    <input type="text" name="Descripcion"   placeholder="Descripcion" onChange={e => setDescripcion(e.target.value)}></input>
                    <input type="file" onChange={handleChange}></input>
                    <button  type="submit">Subir</button>
            </div>
            </form>
            <div>
            <form onSubmit ={handleSubmit}>
            <div>
                <h1>Subir a galeria</h1>
                    <input type="text"   placeholder="Titulo" onChange={e => setTitle(e.target.value)} required></input>
                    <input type="number" name="Banos"  placeholder="Baños" onChange={e => setBanos(e.target.value)} required></input>
                    <input type="number" name="Habitaciones" placeholder="Habitaciones" onChange={e => setHabitaciones(e.target.value)} required></input>
                    <input type="number" name="Precio" placeholder="Precio" onChange={e => setPrecio(e.target.value)} required></input>
                    <input type="text" name="Colonia" placeholder="Colonia" onChange={e => setColonia(e.target.value)} required></input>
                    <h1>Escribe el titulo de la propiedad y la palabra galeria </h1>
                    <input type="text" name="Galeria"   placeholder="Galeria" onChange={e => setGaleria(e.target.value)} required></input>
                    <input type="file" onChange={handleChange}></input>
                    <button  type="submit">Subir</button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default Subir
