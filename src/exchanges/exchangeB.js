const axios = require('axios');
const config = require('../config');

const API_KEY = config.EXCHANGE_B_API_KEY;

const getPrice = async (coin) => {
  // Implement actual API call to Exchange B
  // This is a placeholder implementation
  return Math.random() * 1000;
};

const buy = async (coin, amount) => {
  console.log(`Bought ${amount} of ${coin} on Exchange B`);
  // Implement actual buy logic
};

const sell = async (coin, amount) => {
  console.log(`Sold ${amount} of ${coin} on Exchange B`);
  // Implement actual sell logic
};

module.exports = {
  getPrice,
  buy,
  sell
};