const exchangeA = require('../exchanges/exchangeA');
const exchangeB = require('../exchanges/exchangeB');
const Transaction = require('../models/transaction');

let isTrading = false;

const startTrading = () => {
  isTrading = true;
  console.log('Trading started');
  // Implement actual trading logic here
  tradingLoop();
};

const stopTrading = () => {
  isTrading = false;
  console.log('Trading stopped');
};

const tradingLoop = async () => {
  while (isTrading) {
    try {
      const priceA = await exchangeA.getPrice('BTC');
      const priceB = await exchangeB.getPrice('BTC');

      if (priceA < priceB) {
        await exchangeA.buy('BTC', 1);
        await exchangeB.sell('BTC', 1);
        new Transaction('BTC', 1, priceA, priceB, 'A', 'B').save();
      } else if (priceB < priceA) {
        await exchangeB.buy('BTC', 1);
        await exchangeA.sell('BTC', 1);
        new Transaction('BTC', 1, priceB, priceA, 'B', 'A').save();
      }

      // Wait for a short period before next iteration
      await new Promise(resolve => setTimeout(resolve, 5000));
    } catch (error) {
      console.error('Error in trading loop:', error);
    }
  }
};

module.exports = {
  startTrading,
  stopTrading
};