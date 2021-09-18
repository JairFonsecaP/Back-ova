const db = require("../database/models");
const bcrypt = require("bcryptjs");
const tokenServices = require("../services/token");

exports.register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const exist = await db.Profesores.findOne({
      where: { email: req.body.email },
    });

    if (!exist) {
      const nuevo = await db.Profesores.create({
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
      });

      res.send(nuevo);
    } else {
      res.send({
        message:
          "Este correo ya se encuentra registrado, por favor intente con uno nuevo.",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.list = async (req, res) => {
  try {
    const lista = await db.Profesores.findAll({
      attributes: ["nombre", "email"],
    });
    res.send(lista);
  } catch (e) {
    console.log(e);
  }
};
exports.login = async (req, res) => {
  try {
    const error = {
      message: "Contraseña y/o correo invalido",
    };
    const user = await db.Profesores.findOne({
      where: { email: req.body.email },
    });

    if (user) {
      const { id, email, nombre, password } = user;
      const isTrue = bcrypt.compareSync(req.body.password, password);
      if (isTrue) {
        const auth = tokenServices.encode(id, nombre, email);
        res.json({ token: auth });
      } else {
        res.send(error);
      }
    } else {
      res.send(error);
    }
  } catch (e) {
    console.log(e);
  }
};

exports.newPassword = async (req, res) => {
  try {
    const error = {
      message: "Debes ingresar la contaseña actual",
    };
    const user = await db.Profesores.findByPk(req.params.id);
    const salt = bcrypt.genSaltSync(10);
    if (req.body.newPassword === req.body.confirmPassword) {
      if (user) {
        const { id, password } = user;
        const isTrue = bcrypt.compareSync(req.body.oldPassword, password);
        if (isTrue) {
          const response = await db.Profesores.update(
            {
              password: bcrypt.hashSync(req.body.newPassword, salt),
            },
            { where: { id: id } }
          );
          res.json(response);
        } else {
          res.send(error);
        }
      } else {
        res.send(error);
      }
    } else {
      res.send({
        message:
          "La confirmación de la contraseña debe ser igual a la nueva contraseña",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.eliminar = async (req, res) => {
  try {
    const eliminados = await db.Profesores.destroy({
      where: { id: req.params.id },
    });

    res.send({ eliminados });
  } catch (error) {
    console.log(error);
  }
};

exports.editar = async (req, res) => {
  try {
    const response = await db.Profesores.update(req.body, {
      where: { id: req.params.id },
    });
    if (response[0] > 0) {
      const { id, nombre, email } = await db.Profesores.findByPk(req.params.id);
      console.log(email);
      const auth = tokenServices.encode(id, nombre, email);
      console.log(auth);
      res.json({ token: auth });
    }
  } catch (error) {
    res.send(error);
  }
};
