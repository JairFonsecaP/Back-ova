const { decodeBase64 } = require("bcryptjs");
const db = require("../database/models");

exports.newQuestion = async (req, res) => {
  try {
    const response = await db.Juego.create(req.body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
exports.list = async (req, res) => {
  try {
    const response = await db.Juego.findAll();
    res.send({ largo: response.length, preguntas: response });
  } catch (e) {
    console.log(e);
  }
};
exports.listTrivia = async (req, res) => {
  try {
    const response = await db.Juego.findAll({ where: { estado: true } });
    res.send({ largo: response.length, preguntas: response });
  } catch (e) {
    console.log(e);
  }
};

exports.activate = async (req, res) => {
  try {
    const pregunta = await db.Juego.findByPk(req.params.id);
    if (pregunta) {
      const response = await db.Juego.update(
        { estado: req.body.estado },
        { where: { id: req.params.id } }
      );
      res.send(response);
    }
  } catch (e) {
    console.log(e);
  }
};
exports.eliminar = async (req, res) => {
  try {
    const response = await db.Juego.destroy({ where: { id: req.params.id } });
    if (response) res.send({ message: "Pregunta eliminada con exito" });
  } catch (e) {
    console.error(e);
  }
};
exports.editar = async (req, res) => {
  try {
    const response = await db.Juego.update(req.body, {
      where: { id: req.params.id },
    });
    if (response) res.send(response);
  } catch (e) {
    console.log(e);
  }
};
