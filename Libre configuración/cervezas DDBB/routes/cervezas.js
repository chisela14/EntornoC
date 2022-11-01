const express = require('express');
const router = express.Router();

const{getCervezas, crearCerveza, borrarCerveza}=require('../controllers/cervezas.js');

router.get('/', getCervezas);
  
router.post('/', crearCerveza);

router.delete('/:id', borrarCerveza);

module.exports = router;

// router.put('/cervezas', function(req, res) {
    
// })

// router.patch('/cervezas', function(req, res) {
    
// })