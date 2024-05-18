var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

// anotações Gabriel: próximo passo buscar perfil por id do usuário
router.get("/:empresaId", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
})

module.exports = router;