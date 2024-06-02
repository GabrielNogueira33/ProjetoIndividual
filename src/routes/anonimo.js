var express = require("express");
var router = express.router();

var anonimoController = require("../controllers/anonimoController");

router.post("/cadastrar", function (req, res) {
    jogoController.cadastrar(req, res);
})

router.get("/buscar/:id", function (req, res) {
    anonimoController.buscarPorIdAnonimo(req, res);
  });

  module.exports = router;