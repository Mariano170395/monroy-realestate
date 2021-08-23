import {Schema, model} from 'mongoose'

 const ImageSchema = new Schema ({
    title: String,
    descripcion: String,
    banos: Number,
    habitaciones: Number,
    precio: Number,
    colonia: String,
    estatus: String,
    tendencia: String,
    galeria: String,
    key: String,
    url: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false,
})

export default model ('Image', ImageSchema)