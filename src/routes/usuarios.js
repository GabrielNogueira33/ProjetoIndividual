var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
  });

router.get("/chamarUsuarioPorId/:id", function (req, res) {
    usuarioController.chamarUsuarioPorId(req, res);
  });

  router.get("/chamarUsuarioPorEmail/:email", function (req, res) {
    usuarioController.chamarUsuarioPorEmail(req, res);
  });

  

module.exports = router;