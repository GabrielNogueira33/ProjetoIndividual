var graficoModel = require("../models/graficoModel");

function obterVotosJogos(req, res){

    graficoModel.obterVotosJogos().then((resultado) => {
        res.status(200).json(resultado);
    }

)}

function obterQuantidadeFPS(req, res){

    graficoModel.obterQuantidadeFPS().then((resultado) => {
        res.status(200).json(resultado);
    }

)}

function obterQuantidadeRPG(req, res){

    graficoModel.obterQuantidadeRPG().then((resultado) => {
        res.status(200).json(resultado);
    }

)}

function obterQuantidadeMundoAberto(req, res){

    graficoModel.obterQuantidadeMundoAberto().then((resultado) => {
        res.status(200).json(resultado);
    }

)}

function obterQuantidadeSobrevivencia(req, res){

    graficoModel.obterQuantidadeSobrevivencia().then((resultado) => {
        res.status(200).json(resultado);
    }

)}

function obterQuantidadeOutros(req, res){

    graficoModel.obterQuantidadeOutros().then((resultado) => {
        res.status(200).json(resultado);
    }

)}

module.exports = {
    obterVotosJogos,
    obterQuantidadeFPS,
    obterQuantidadeRPG,
    obterQuantidadeMundoAberto,
    obterQuantidadeSobrevivencia,
    obterQuantidadeOutros,
}