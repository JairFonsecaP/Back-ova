const db = require("../database/models");

exports.list = async (req, res) => {
  try {
    const response = await db.Cursos.findAll();
    res.send(response);
  } catch (e) {}
};
exports.list_ova = async (req, res) => {
  try {
    const response = await db.Cursos.findAll({ where: { estado: true } });
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

exports.add = async (req, res) => {
  try {
    const register = await db.Cursos.create(req.body);
    res.send(register);
  } catch (e) {}
};

exports.activate = async (req, res) => {
  try {
    const curso = await db.Cursos.findByPk(req.params.id);
    if (curso) {
      const response = await db.Cursos.update(
        { estado: req.body.estado },
        { where: { id: req.params.id } }
      );
      return res.send(response);
    }
  } catch (e) {
    console.log(e);
  }
};

exports.eliminar = async (req, res) => {
  try {
    const response = await db.Cursos.destroy({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
