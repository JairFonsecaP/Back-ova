"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Juegos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pregunta: {
        type: Sequelize.STRING,
      },
      respuestaA: {
        type: Sequelize.STRING,
      },
      respuestaB: {
        type: Sequelize.STRING,
      },
      respuestaC: {
        type: Sequelize.STRING,
      },
      respuestaD: {
        type: Sequelize.STRING,
      },
      respuestaCorrecta: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Juegos");
  },
};
