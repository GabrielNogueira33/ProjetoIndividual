var database = require("../database/config");

function obterVotosJogos(){
    var instrucaoSql = `
    select 
    pj.jogo as genero,
    pj.categoria as categoria,
    count(us.fk_jogo) as quantidade
    from usuario us
    inner join pesquisaJogos pj on us.fk_jogo = pj.id
    group by pj.jogo, pj.categoria
    order by quantidade desc;
    `

        return database.executar(instrucaoSql);
}

function obterQuantidadeFPS(){
    var instrucaoSql = `
    select
    count(fk_jogo) as quantidade from usuario  where fk_jogo = 1;`

        return database.executar(instrucaoSql);
}


function obterQuantidadeRPG(){
    var instrucaoSql = `
    select
    count(fk_jogo) as quantidade from usuario  where fk_jogo = 2;`

        return database.executar(instrucaoSql);
}

function obterQuantidadeMundoAberto(){
    var instrucaoSql = `
    select
    count(fk_jogo) as quantidade from usuario  where fk_jogo = 3;`

        return database.executar(instrucaoSql);
}


function obterQuantidadeSobrevivencia(){
    var instrucaoSql = `
    select
    count(fk_jogo) as quantidade from usuario  where fk_jogo = 4;`

        return database.executar(instrucaoSql);
}


function obterQuantidadeOutros(){
    var instrucaoSql = `
    select
    count(fk_jogo) as quantidade from usuario  where fk_jogo = 5;`

        return database.executar(instrucaoSql);
}

module.exports = {
    obterVotosJogos,
    obterQuantidadeFPS,
    obterQuantidadeRPG,
    obterQuantidadeMundoAberto,
    obterQuantidadeSobrevivencia,
    obterQuantidadeOutros,
}