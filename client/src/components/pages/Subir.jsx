import React, {useState} from 'react'
import axios from 'axios'



const Subir = () => {

    //Para la imagen
    const [ file, setFile ] = useState()

    //Para el titulo
    const [ title, setTitle ] = useState()

    const handleChange = (e) =>{
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Envia los datos de mis variables aqui
        const formData = new FormData()

        formData.append('file', file)
        formData.append('title', title)

        //Peticion Post con axios
       const res = await axios.post('/api/images/upload', formData)
       console.log(res)
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
            <div className="cont-grid">
                    <input type="text" className="Titulo"  placeholder="Titulo" onChange={e => setTitle(e.target.value)}></input>
                    {/* <input type="text" name="apellidos" className="apellidos"  placeholder=""></input>
                    <input type="email" name="emailUsuario" className="correo"  placeholder=""></input>
                    <input type="number" name="numTelefono" className="telefono"  placeholder=""></input>
                    <textarea type="text" name="mensaje" className="mensaje"  placeholder=""></textarea> */}
                    <input type="file" onChange={handleChange}></input>
                    <button className="enviar" type="submit">Subir</button>
            </div>
            </form>
        </div>
    )
}

export default Subir
