const router = require("express").Router();
const profesorController = require("../../controllers/profesorController");
const { verifyUsuario } = require("../../middlewares/auth/auth");

router.post("/register", verifyUsuario, profesorController.register);
router.post("/login", profesorController.login);
router.get("/list", verifyUsuario, profesorController.list);
router.patch(
  "/new-password/:id",
  verifyUsuario,
  profesorController.newPassword
);
router.delete("/eliminar/:id", verifyUsuario, profesorController.eliminar);
router.patch("/editar/:id", verifyUsuario, profesorController.editar);

module.exports = router;
