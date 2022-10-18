const express = require('express');
const router = express.Router();

router.get('/cervezas', function(req, res) {
    res.json(cervezas)  
  })
  
router.post('/cervezas', function(req, res) {
    cervezas.push(req.body);
    cervezas[cervezas.length-1].id = cervezas[cervezas.length-2].id + 1;
    res.json(cervezas[cervezas.length-1])   
})

router.delete('/cervezas/:id', function(req, res) {
    let id = req.params.id
    cervezas.splice(id-1, 1);
    for(let i=id; i<=cervezas.length;i++){
        cervezas[i-1].id = parseInt(i);
    }
    res.json(cervezas)  
})

// router.put('/cervezas', function(req, res) {
    
// })

// router.patch('/cervezas', function(req, res) {
    
// })