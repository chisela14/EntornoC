var express = require('express') //llamamos a Express
var app = express() 
var port = 8080  // establecemos nuestro puerto

//middleware
app.use(express.json());
app.use('/cervezas', require('./routes/rutas.js'));
              
let cervezas = [
    {
        "id": 1,
        "nombre": "mahou",
        "grados": 3.2
    },
    {
        "id": 2,
        "nombre": "cruzcampo",
        "grados": 3.5
    },
    {
        "id": 3,
        "nombre": "ambar",
        "grados": 4.2
    }
];

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)