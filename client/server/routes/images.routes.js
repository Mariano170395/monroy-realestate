import { Router } from "express";
import AWS from 'aws-sdk'
import config from '../config'

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

     try {
         const uploadObject = await s3.putObject({
             ACL: 'public-read',
             Bucket: config.BucketName,
             Body: file.data,
             Key: file.name,
         }).promise()
             console.log(uploadObject)

     } catch (error) {
           console.log(error)
          res.send(error)
     }

    return res.json('Holi')
})


//Te muestra direccion de imagenes
router.get('/api/images', async(req, res)=>{})
//informacion de una imagen
router.get('/api/images/:id', async(req, res)=>{})
//borrar una imagen a partir de un id
router.delete('/api/images/:id', async(req, res)=>{})


export default router