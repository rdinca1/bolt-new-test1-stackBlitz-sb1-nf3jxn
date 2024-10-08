require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  EXCHANGE_A_API_KEY: process.env.EXCHANGE_A_API_KEY,
  EXCHANGE_B_API_KEY: process.env.EXCHANGE_B_API_KEY
};