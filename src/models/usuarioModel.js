var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, fk_jogo as jogoId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, jogoId) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, jogoId);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, fk_jogo) VALUES ('${nome}', '${email}', '${senha}', ' ${jogoId} ');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql = `SELECT u.nome FROM usuario u`;
  
    return database.executar(instrucaoSql);
  }

function chamarUsuarioPorId(usuarioId){
    var instrucaoSql = `SELECT u.nome FROM usuario u WHERE u.id = '${usuarioId}'`;

    return database.executar(instrucaoSql);
}

function chamarUsuarioPorEmail(email){
    var instrucaoSql = `SELECT nome FROM usuario WHERE email = '${email}'`;

    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    listar,
    chamarUsuarioPorId,
    chamarUsuarioPorEmail
};