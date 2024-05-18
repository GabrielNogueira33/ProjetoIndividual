var jogoModel = require("../models/jogoModel");

function buscarPorJogos(req, res) {
  var jogo = req.query.jogo;

  jogoModel.buscarPorJogos(jogo).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  jogoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  jogoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var jogo = req.body.jogos;

  jogoModel.buscarPorJogos(jogo).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a jogo com o jogo ${jogo} já existe` });
    } else {
      jogoModel.cadastrar(jogo).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorJogos,
  buscarPorId,
  cadastrar,
  listar,
};
