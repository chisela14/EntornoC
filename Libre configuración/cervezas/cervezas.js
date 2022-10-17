var express = require('express') //llamamos a Express
var app = express() 
var port = 8080  // establecemos nuestro puerto

//middleware
app.use(express.json());
              

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

app.get('/cervezas', function(req, res) {
  res.json(cervezas)  
})

app.post('/cervezas', function(req, res) {
    cervezas.push(req.body);
    cervezas[cervezas.length-1].id = cervezas[cervezas.length-2].id + 1;
    res.json(cervezas[cervezas.length-1])   
})

app.put('/cervezas', function(req, res) {
     
})

app.patch('/cervezas', function(req, res) {
      
})

app.delete('/cervezas/:id', function(req, res) {
  let id = req.params.id
  cervezas.splice(id-1, 1);
  for(let i=id; i<=cervezas.length;i++){
    cervezas[i-1].id = parseInt(i);
  }
  res.json(cervezas)  
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)