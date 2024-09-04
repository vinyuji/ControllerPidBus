// controllers/OnibusController.js
const { Onibus } = require('../models');

const OnibusController = {
  async create(req, res) {
    try {
      const { numero, capacidade, pontos } = req.body;
      const onibus = await Onibus.create({ numero, capacidade, pontos });
      return res.status(201).json(onibus);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const onibus = await Onibus.findAll();
      return res.status(200).json(onibus);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Mais métodos como getById, update, delete...
};

module.exports = OnibusController;
