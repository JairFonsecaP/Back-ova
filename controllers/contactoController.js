const db = require("../database/models");
const email = require("../services/email");

exports.registro = async (req, res) => {
  const response = await db.Contact.create(req.body);
  const emails = await email.contact(response.toJSON());
  emails
    ? res.send({
        type: "success",
        title: "Registro exitoso",
        message:
          "Gracias por comunicarte con nosotros en breve alguien de nuestro equipo se contactará contigo",
      })
    : res.send({
        type: "error",
        title: "Error",
        message: "No se pudo enviar su mensaje, por favor intente nuevamente.",
      });
};
