var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM pesquisaJogos WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM pesquisaJogos`;

  return database.executar(instrucaoSql);
}

function buscarPorJogos(jogo) {
  var instrucaoSql = `SELECT * FROM pesquisaJogos WHERE jogo = '${jogo}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(jogo) {
  var instrucaoSql = `INSERT INTO pesquisaJogos (jogo) VALUES ('${jogo}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorJogos, buscarPorId, cadastrar, listar };
