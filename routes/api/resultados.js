const router = require("express").Router();
const resultadosController = require("../../controllers/resultadosController");
const { verifyUsuario } = require("../../middlewares/auth/auth");

router.get("/list", verifyUsuario, resultadosController.list);
router.post("/add", resultadosController.add);

module.exports = router;
