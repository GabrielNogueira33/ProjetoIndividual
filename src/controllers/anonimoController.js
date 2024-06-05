var anonimoModel = require("../models/anonimoModel");

function buscarPorIdAnonimo(req, res) {
    var anonimoId = req.params.id;
  
    anonimoModel.buscarPorId(anonimoId).then((resultado) => {
      res.status(200).json(resultado);
    });
  }


function cadastrar(req, res) {
    var anonimoNome = req.body.anonimoNomeServer
    var anonimoId = req.body.anonimoIdServer;
        anonimoModel.cadastrar(anonimoId, anonimoNome).then((resultado) => {
          res.status(201).json(resultado);
        });
      }

  module.exports = {
    buscarPorIdAnonimo,
    cadastrar
  }