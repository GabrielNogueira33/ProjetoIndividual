var database = require("../database/config");

function obterVotosJogos(){
    var instrucaoSql = `
    SELECT 
            pesquisaJogos.jogo AS genero,
            COUNT(usuario.fk_jogo) AS quantidade
        FROM usuario
        JOIN pesquisaJogos ON usuario.fk_jogo = pesquisaJogos.id
        GROUP BY pesquisaJogos.jogo;`
}