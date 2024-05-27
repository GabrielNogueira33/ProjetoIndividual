var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

// anotações Gabriel: próximo passo buscar perfil por id do usuário
router.get("/:id", function (req, res) {
  perfilController.buscarPerfilPorId(req, res);
});

// router.post("/cadastrar", function (req, res) {
//   perfilController.cadastrar(req, res);
// })

module.exports = router;