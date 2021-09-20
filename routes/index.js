const router = require("express").Router();
const apiRouterContacto = require("./api/contacto");
const apiRouterCursos = require("./api/cursos");
const apiRouterProfesor = require("./api/profesor");
const apiRouterJuego = require("./api/juego");
const apiRouterResultados = require("./api/resultados");
const apiRouterRecursos = require("./api/recursos");

router.use("/contacto", apiRouterContacto);
router.use("/cursos", apiRouterCursos);
router.use("/profesor", apiRouterProfesor);
router.use("/juego", apiRouterJuego);
router.use("/resultados", apiRouterResultados);
router.use("/recursos", apiRouterRecursos);

module.exports = router;
