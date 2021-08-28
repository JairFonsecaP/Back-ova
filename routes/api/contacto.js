const router = require("express").Router();
const contactoController = require("../../controllers/contactoController");

router.post("/registro", contactoController.registro);

module.exports = router;
