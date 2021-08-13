"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _images = _interopRequireDefault(require("./routes/images.routes"));

var _config = _interopRequireDefault(require("./config"));

require("./database");

//Ejecutar
var app = (0, _express.default)(); //Colocar en un puerto
//si hay una variable, que la use, si hay una variable port que la use, si no el 4000

app.set('port', process.env.PORT || 4000); //postea en el server
// app.get('/', (req, res)=>res.send('hola'))
//Interpretar el archivo y luego subirlos

app.use((0, _expressFileupload.default)({
  tempFileDir: '/temp'
})); //Probamos nuestro index.routes

app.use(_index.default); //Usamos imagesRoutes

app.use(_images.default); //Escucha el puerto que definimos

app.listen(app.get('port'));
console.log('Server on port: ', app.get('port'));