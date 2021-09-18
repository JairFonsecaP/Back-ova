"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cursos",
      [
        {
          curso: "2a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curso: "2b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Profesores",
      [
        {
          nombre: "Karen",
          email: "karen@karen.com",
          password:
            "$2a$10$i4nirhIhQCSvQbn6jQcYM.zuC9kFpAr37dtrDu1pQRUzuBGh22lyK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Nicolas",
          email: "nicolas@nicolas.com",
          password:
            "$2a$10$Cf3QxsYiDEs4cfmhW9AQu.l25q7F2K8zMvhToduBJdywzl7xhrud2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Jair",
          email: "jair@jair.com",
          password:
            "$2a$10$kpXjJSUh9JdvKjEuvdFZ5uKL.liNbzdIszwZdP6n7JgljkLJCzhI.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete("People", null, {});
  },
};
