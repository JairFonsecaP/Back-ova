'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resultados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Resultados.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    curso: DataTypes.STRING,
    puntaje: DataTypes.INTEGER,
    vidas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resultados',
  });
  return Resultados;
};