const jwt = require("jsonwebtoken");
const db = require("../database/models");

const duracion = 24 * 60 * 60;

module.exports = {
  encode: (id, nombre, email) => {
    const token = jwt.sign(
      {
        id: id,
        nombre: nombre,
        email: email,
      },
      "private.key",
      { expiresIn: duracion }
    );
    return token;
  },

  decode: async (token) => {
    try {
      const { id } = await jwt.verify(token, "private.key");

      const user = await db.Profesores.findByPk(id);

      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (e) {
      //const newToken = await checkToken(token);
      //return newToken;
    }
  },
};
