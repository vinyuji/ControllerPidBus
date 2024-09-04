// models/HistoricoModel.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Historico = sequelize.define('Historico', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_onibus: { type: DataTypes.INTEGER, allowNull: false },
    dia_semana: { type: DataTypes.STRING, allowNull: false },
    data: { type: DataTypes.DATE, allowNull: false },
    media_acumulada: { type: DataTypes.FLOAT, allowNull: false }
  });

  return Historico;
};
