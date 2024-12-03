class DiscountContext {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calculateDiscount(price) {
      return this.strategy.calculate(price);
    }
  }
  
  module.exports = DiscountContext;
  