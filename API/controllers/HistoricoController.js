// controllers/HistoricoController.js
const { Historico } = require('../models');

const HistoricoController = {
  async create(req, res) {
    try {
      const { id_onibus, dia_semana, data, media_acumulada } = req.body;
      const historico = await Historico.create({ id_onibus, dia_semana, data, media_acumulada });
      return res.status(201).json(historico);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const historico = await Historico.findAll();
      return res.status(200).json(historico);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Mais métodos como getById...
};

module.exports = HistoricoController;
