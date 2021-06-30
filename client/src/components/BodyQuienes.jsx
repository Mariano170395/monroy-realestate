import React from 'react'
import quienessomos from '../images/quienessomos.png'

const BodyQuienes = () => {
    return (
        <div className='BackgroundQuienes'>
            <div className='TranspQuienes'></div>
            <img src={quienessomos} className='ImgQuienes'></img>
            <div className='TextQuieContainer'>
            <h6 className='NumQuienes'>02</h6>
            <h2 className='QuienesSomos'>¿Quiénes somos?</h2>
            </div>
            <div className='QuienesNav'>
                <button>Valores de MONROY REAL ESTATE</button>
                <button>Asesores Inmobiliarios</button>
                <button>Misión</button>
                <button>Nuestros Servicios</button>
            </div>
        </div>
    )
}

export default BodyQuienes
