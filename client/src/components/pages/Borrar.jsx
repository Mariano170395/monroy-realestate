import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

const Borrar = () => {

    const [image, setImage] = useState({
        title:"",
        url:"",
        _id:"",
    })
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        (async() =>{
            const res = await axios.get(`/api/images/${params.id}`)
            setImage(res.data)
        })();
    }, [params.id]);

    const handleDelete = async() => {
        const res = await axios.delete('/api/images/' + params.id)
        console.log(res)
        history.push('/')
    }

    return (
        <div>
            <img src={image.url} alt={image.title}></img>
            <h1>{image.title}</h1>
            <button onClick={handleDelete}>Borrar</button>
        </div>
    )
}

export default Borrar
