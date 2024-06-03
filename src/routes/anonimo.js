var express = require("express");
var router = express.Router();

var anonimoController = require("../controllers/anonimoController");

router.post("/cadastrar", function (req, res) {
    anonimoController.cadastrar(req, res);
})

router.get("/buscarPorIdAnonimo/:id", function (req, res) {
    anonimoController.buscarPorIdAnonimo(req, res);
  });

  module.exports = router;