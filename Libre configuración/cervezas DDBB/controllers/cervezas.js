const db = require('..models/db')



function getCervezas(req, res){
    res.json(cervezas);  
}

function getCerveza(req,res){
    const id = req.params.id;
    const {nombre, grados='3.2'} = req.query
}

function crearCerveza(req, res){
    cervezas.push(req.body);
    cervezas[cervezas.length-1].id = cervezas[cervezas.length-2].id + 1;
    res.json(cervezas[cervezas.length-1])  
}

function borrarCerveza(req, res){
    let id = req.params.id
    cervezas.splice(id-1, 1);
    for(let i=id; i<=cervezas.length;i++){
        cervezas[i-1].id = parseInt(i);
    }
    res.json(cervezas) 
}

module.exports = {getCervezas, crearCerveza, borrarCerveza};

// router.get('/cervezas', function(req, res) {
//     res.json(cervezas)  
//   })
  
// router.post('/cervezas', function(req, res) {
//     cervezas.push(req.body);
//     cervezas[cervezas.length-1].id = cervezas[cervezas.length-2].id + 1;
//     res.json(cervezas[cervezas.length-1])   
// })

// router.delete('/cervezas/:id', function(req, res) {
//     let id = req.params.id
//     cervezas.splice(id-1, 1);
//     for(let i=id; i<=cervezas.length;i++){
//         cervezas[i-1].id = parseInt(i);
//     }
//     res.json(cervezas)  
// })