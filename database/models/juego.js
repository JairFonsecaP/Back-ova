'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Juego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Juego.init({
    pregunta: DataTypes.STRING,
    respuestaA: DataTypes.STRING,
    respuestaB: DataTypes.STRING,
    respuestaC: DataTypes.STRING,
    respuestaD: DataTypes.STRING,
    respuestaCorrecta: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Juego',
  });
  return Juego;
};