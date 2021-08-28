const router = require("express").Router();
const apiRouterContacto = require("./api/contacto");

router.use("/contacto", apiRouterContacto);

module.exports = router;
