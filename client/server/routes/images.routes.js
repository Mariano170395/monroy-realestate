import { Router } from "express";
import AWS from 'aws-sdk'
import config from '../config'
import Image from '../models/Images'
import Images from "../models/Images";

const router = Router();


/*Endpoint aws*/
const spacesEndpoint = new AWS.Endpoint(config.Endpoint);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
});


//Subir una imagen
router.post('/api/images/upload', async(req, res)=>{

    //muestra todos los datos de mi archivo subido
    // console.log(req.files)

    const {file} = req.files;
    //Yo solo quiero la info de la imagen 
    console.log(file)
 /*Conecto con aws mi backend a digital ocean*/
     try {
         const uploadObject = await s3.putObject({
             ACL: 'public-read',
             Bucket: config.BucketName,
             Body: file.data,
             Key: file.name,
         }).promise()
             console.log(uploadObject)

             /*Creo Url de mi imagen*/

             const urlImage = `https://${config.BucketName}.${config.Endpoint}/${file.name}`
             console.log(urlImage)

             /*Guardar en base de datos*/

            const image = new Image ({
                url: urlImage,
                key: file.name,
                title: req.body.title,
                prioridad: req.body.prioridad,
                descripcion: req.body.descripcion,
                banos: req.body.banos,
                habitaciones: req.body.habitaciones,
                precio: req.body.precio,
                colonia: req.body.colonia,
             })

             await image.save();
             return res.json(image)

     } catch (error) {
           console.log(error)
          res.send(error)
     }
})


//Te muestra direccion de imagenes
router.get('/api/images', async(req, res)=>{

    const images = await Image.find()
    return res.json(images)


})
//informacion de una imagen
router.get('/api/images/:id', async(req, res)=>{

 const image = await Image.findById(req.params.id);
 return res.json(image)

 })
//borrar una imagen a partir de un id
router.delete('/api/images/:id', async(req, res)=>{

    const deletedImage = await Image.findByIdAndDelete(req.params.id);

         await s3.deleteObject({
         Bucket: config.BucketName, 
         Key: deletedImage.key
            }).promise();

     res.json(deletedImage)


})


export default router