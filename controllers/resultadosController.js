const db = require("../database/models");

exports.add = async (req, res) => {
  try {
    const response = await db.Resultados.create(req.body);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

exports.list = async (req, res) => {
  try {
    const response = await db.Resultados.findAll();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
