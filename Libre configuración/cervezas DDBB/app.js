const{connect}= require('diskdb');
const express = require('express')
const{dbConnection} = require('./database/config');
require('dotenv').config();



var app = express() 

let cervezasJson = require('./mode/cervezas.json');

//middleware
app.use(express.json());
app.use('/cervezas', require('./routes/cervezas.js'));
app.use('/bares', require('./routes/bares.js'))
              

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)