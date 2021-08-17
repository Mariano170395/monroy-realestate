import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const Propiedad = () => {

    const [image, setImage] = useState({
        title:"",
        url:"",
        _id:"",
    })
    const params = useParams()

    useEffect(() => {
        (async() =>{
            const res = await axios.get(`/api/images/${params.id}`)
            setImage(res.data)
        })();
    });

    return (
        <div>
            <img src={image.url} alt={image.title}></img>
            <h1>{image.title}</h1>
        </div>
    )
}

export default Propiedad
