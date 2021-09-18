const router = require("express").Router();
const cursosController = require("../../controllers/cursosController");
const { verifyUsuario } = require("../../middlewares/auth/auth");

router.get("/list", verifyUsuario, cursosController.list);
router.get("/list-ova", cursosController.list_ova);
router.post("/add", verifyUsuario, cursosController.add);
router.patch(
  "/activate-deactivate/:id",
  verifyUsuario,
  cursosController.activate
);
router.delete("/eliminar/:id", verifyUsuario, cursosController.eliminar);

module.exports = router;
