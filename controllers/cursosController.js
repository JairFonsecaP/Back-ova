const db = require("../database/models");

exports.list = async (req, res) => {
  try {
    const response = await db.Cursos.findAll();
    console.log(response);
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
