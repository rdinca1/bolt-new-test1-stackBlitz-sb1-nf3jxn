class Transaction {
  constructor(coin, amount, buyPrice, sellPrice, buyExchange, sellExchange) {
    this.coin = coin;
    this.amount = amount;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.buyExchange = buyExchange;
    this.sellExchange = sellExchange;
    this.timestamp = new Date();
    this.profit = (sellPrice - buyPrice) * amount;
  }

  save() {
    // In a real implementation, this would save the transaction to a database
    console.log('Saved transaction:', this);
  }
}

module.exports = Transaction;