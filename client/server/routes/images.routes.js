import { Router } from "express";

const router = Router();
//Subir una imagen
router.post('/api/images/upload', async(req, res)=>{

    //muestra todos los datos de mi archivo subido
    // console.log(req.files)

    const {file} = req.files;
    //Yo solo quiero la info de la imagen 
    console.log(file)
    return res.json('recibido')
})
//Te muestra direccion de imagenes
router.get('/api/images', async(req, res)=>{})
//informacion de una imagen
router.get('/api/images/:id', async(req, res)=>{})
//borrar una imagen a partir de un id
router.delete('/api/images/:id', async(req, res)=>{})


export default router