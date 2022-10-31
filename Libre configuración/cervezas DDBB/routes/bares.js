const express = require('express');
const router = express.Router();

const{getBares, crearBar, borrarBar}=require('../controllers/bares.js');

router.get('/', getBares);
  
router.post('/', crearBar);

router.delete('/:id', borrarBar);

module.exports = router;