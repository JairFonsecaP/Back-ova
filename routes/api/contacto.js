const router = require("express").Router();
const contactoController = require("../../controllers/contactoController");
const { verifyUsuario } = require("../../middlewares/auth/auth");

router.post("/registro", contactoController.registro);
router.get("/list", /*verifyUsuario,*/ contactoController.list);
module.exports = router;
