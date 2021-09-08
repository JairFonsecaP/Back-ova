const router = require("express").Router();
const cursosController = require("../../controllers/cursosController");

router.get("/list", cursosController.list);
router.post("/add", cursosController.add);

module.exports = router;
