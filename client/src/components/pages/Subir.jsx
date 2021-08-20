import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'



const Subir = () => {

    //Para la imagen
    const [ file, setFile ] = useState()

    //Para el titulo
    const [ title, setTitle ] = useState()

    //Para prioridad
    const [ prioridad, setPrioridad ] = useState()

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
        formData.append('prioridad', prioridad)
        formData.append('descripcion', descripcion)
        formData.append('banos', banos)
        formData.append('habitaciones', habitaciones)
        formData.append('precio', precio)
        formData.append('colonia', colonia)

        //Peticion Post con axios
       const res = await axios.post('/api/images/upload', formData)
       console.log(res)
       history.push('/comprar')
       
    }


    return (
        <div>
            <div className="titulo-flex">
                <div>
                    <h1 className="title">SUBIR ARCHIVO</h1>
                    <hr className="linea"/>
                </div>
            </div>
            <form onSubmit ={handleSubmit}>
            <div>
                    <input type="text"   placeholder="Titulo" onChange={e => setTitle(e.target.value)}></input>
                    <input type="text" name="Prioridad"  placeholder="Prioridad" onChange={e => setPrioridad(e.target.value)}></input>
                    <input type="text" name="Descripcion"   placeholder="Descripcion" onChange={e => setDescripcion(e.target.value)}></input>
                    <input type="number" name="Banos"  placeholder="Baños" onChange={e => setBanos(e.target.value)}></input>
                    <input type="number" name="Habitaciones" placeholder="Habitaciones" onChange={e => setHabitaciones(e.target.value)}></input>
                    <input type="number" name="Precio" placeholder="Precio" onChange={e => setPrecio(e.target.value)}></input>
                    <input type="text" name="Colonia" placeholder="Colonia" onChange={e => setColonia(e.target.value)}></input>
                    <input type="file" onChange={handleChange}></input>
                    <button  type="submit">Subir</button>
            </div>
            </form>
        </div>
    )
}

export default Subir
