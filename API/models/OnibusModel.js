// models/OnibusModel.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Onibus = sequelize.define('Onibus', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    numero: { type: DataTypes.STRING, allowNull: false },
    capacidade: { type: DataTypes.INTEGER, allowNull: false },
    pontos: { type: DataTypes.JSON, allowNull: false }  // Pontos de parada (como um array de objetos)
  });

  return Onibus;
};

