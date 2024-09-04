// server.js
const express = require('express');
const bodyParser = require('body-parser');

// Importando os controladores corretamente
const OnibusController = require('./controllers/OnibusController');
const HistoricoController = require('./controllers/HistoricoController');
const { preverOnibus } = require('./controllers/PIDController');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/onibus', OnibusController.create);
app.get('/onibus', OnibusController.getAll);
app.get('/prever', preverOnibus);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
