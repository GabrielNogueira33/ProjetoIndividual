var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/obterVotosJogos", function(req,res){
    graficoController.obterVotosJogos(req,res);
});

router.get("/obterQuantidadeFPS", function(req,res){
    graficoController.obterQuantidadeFPS(req,res);
});

router.get("/obterQuantidadeRPG", function(req,res){
    graficoController.obterQuantidadeRPG(req,res);
});

router.get("/obterQuantidadeMundoAberto", function(req,res){
    graficoController.obterQuantidadeMundoAberto(req,res);
});

router.get("/obterQuantidadeSobrevivencia", function(req,res){
    graficoController.obterQuantidadeSobrevivencia(req,res);
});

router.get("/obterQuantidadeOutros", function(req,res){
    graficoController.obterQuantidadeOutros(req,res);
});

module.exports = router; 
