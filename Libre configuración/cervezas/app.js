//To DO: crear recurso nuevo (bares por ejemplo)
//cargar fichero, modificar y guardar
//https://stackabuse.com/reading-and-writing-json-files-with-node-js/ 


var express = require('express') //llamamos a Express
var app = express() 
var port = 8080  // establecemos nuestro puerto
let cervezasJson = require('./mode/cervezas.json');

//middleware
app.use(express.json());
app.use('/cervezas', require('./routes/cervezas.js'));
app.use('/bares', require('./routes/bares.js'))
              

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)