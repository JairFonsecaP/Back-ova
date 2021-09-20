const router = require("express").Router();
const recursosController = require("../../controllers/recursosController");

router.get("/enviar-video/:archivo", recursosController.enviarVideo);
router.get("/enviar-pdf/:archivo", recursosController.enviarPDF);

module.exports = router;
