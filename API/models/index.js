// models/index.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Onibus = require('./OnibusModel')(sequelize);
const Historico = require('./HistoricoModel')(sequelize);

sequelize.sync({ force: true })
  .then(() => console.log("Database & tables created!"));

module.exports = { sequelize, Onibus, Historico };
