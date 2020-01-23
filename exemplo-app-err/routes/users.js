var express = require('express');
var router = express.Router();
//primeira coisa importa modelo
var UsuarioModelo = require("./UsuarioModelo");

/* GET users listing. */
router.get('/', function(req, res, next) {
 //aqui essas condiçoes
  UsuarioModelo.find({nome: 'Ursula'}, function(err, resultado){
    if(err){
      return handleError(err);
    }
    res.status(200).json(resultado);
  })

  
});

module.exports = router;
