var database = require("../database/config");

function cadastrar(anonimoId,anonimo) {
    var instrucaoSql = `INSERT INTO anonimo (id, nome) VALUES ('${anonimoId},${anonimo}')`;
  
    return database.executar(instrucaoSql);
  }

  function buscarPorIdAnonimo(anonimoId) {
    var instrucaoSql = `SELECT * FROM anonimo WHERE id = '${anonimoId}'`;
  
    return database.executar(instrucaoSql);
  }

  module.exports = {
    buscarPorIdAnonimo,
    cadastrar
  }