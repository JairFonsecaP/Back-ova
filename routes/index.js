const router = require("express").Router();
const apiRouterContacto = require("./api/contacto");
const apiRouterCursos = require("./api/cursos");

router.use("/contacto", apiRouterContacto);
router.use("/cursos", apiRouterCursos);

module.exports = router;
