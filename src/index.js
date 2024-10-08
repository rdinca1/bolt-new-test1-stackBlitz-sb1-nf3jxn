require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const arbitrageService = require('./services/arbitrageService');
const balanceService = require('./services/balanceService');

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Backend is running');
});

app.post('/start-trading', (req, res) => {
  arbitrageService.startTrading();
  res.send('Trading started');
});

app.post('/stop-trading', (req, res) => {
  arbitrageService.stopTrading();
  res.send('Trading stopped');
});

app.get('/balance', (req, res) => {
  const balance = balanceService.getBalance();
  res.json(balance);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});