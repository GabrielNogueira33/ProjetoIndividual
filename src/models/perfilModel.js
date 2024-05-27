var database = require("../database/config");

function buscarPerfilPorId(idUsuario) {

  var instrucaoSql = `SELECT * FROM usuario WHERE id = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// function cadastrar(idUsuario, descricao) {
  
//   var instrucaoSql = `INSERT INTO usuario(fk_jogo)  VALUES (${jogosId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }


module.exports = {
  buscarPerfilPorId
//   cadastrar
}
