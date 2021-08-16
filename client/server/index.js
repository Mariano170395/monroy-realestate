import express from 'express'
import fileUpload from 'express-fileupload';
import indexRoutes from './routes/index.routes'
import imagesRoutes from './routes/images.routes'
import config from './config';
import './database'


//Ejecutar
const app = express()


//Colocar en un puerto
//si hay una variable, que la use, si hay una variable port que la use, si no el 4000
app.set('port',process.env.PORT || 5000);

//postea en el server
// app.get('/', (req, res)=>res.send('hola'))

//Interpretar el archivo y luego subirlos
app.use(fileUpload({
    tempFileDir: '/temp'
}))
//Probamos nuestro index.routes
app.use(indexRoutes)

//Usamos imagesRoutes
app.use(imagesRoutes)

//Escucha el puerto que definimos
app.listen(app.get('port'))
console.log('Server on port: ', app.get('port'))