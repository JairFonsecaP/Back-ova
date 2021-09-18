const router = require("express").Router();
const juegoController = require("../../controllers/juegoController");
const { verifyUsuario } = require("../../middlewares/auth/auth");

router.get("/list", verifyUsuario, juegoController.list);
router.get("/list-trivia", juegoController.listTrivia);
router.post("/add", verifyUsuario, juegoController.newQuestion);
router.patch(
  "/activate-deactivate/:id",
  verifyUsuario,
  juegoController.activate
);
router.patch("/edit/:id", verifyUsuario, juegoController.editar);
router.delete("/eliminar/:id", verifyUsuario, juegoController.eliminar);
module.exports = router;
