const router = require("express").Router();
const recursosController = require("../../controllers/recursosController");

router.get("/enviar-video/:archivo", recursosController.enviarVideo);

module.exports = router;
