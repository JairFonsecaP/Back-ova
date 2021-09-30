const router = require("express").Router();
const recursosController = require("../../controllers/recursosController");

router.get("/enviar-video/:archivo", recursosController.enviarVideo);
router.get("/enviar-pdf/:archivo", recursosController.enviarPDF);
router.get("/enviar-picture/:archivo", recursosController.enviarPic);
router.get("/enviar-gif/:archivo", recursosController.enviarGif);

module.exports = router;
