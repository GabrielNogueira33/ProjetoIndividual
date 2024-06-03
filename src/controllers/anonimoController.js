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
  
    // anonimoModel.buscarPorIdAnonimo(anonimoId).then((resultado) => {
    //   if (resultado.length > 0) {
    //     res
    //       .status(401)
    //       .json({ mensagem: `o id com o numero ${anonimoId} já existe` });
    //   } else {
        anonimoModel.cadastrar(anonimoId, anonimoNome).then((resultado) => {
          res.status(201).json(resultado);
        });
      }
  //   });
  // }

  module.exports = {
    buscarPorIdAnonimo,
    cadastrar
  }