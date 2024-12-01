class CheeseDecorator {
    constructor(pizza) {
      this.pizza = pizza;
    }
  
    getDescription() {
      return `${this.pizza.getDescription()} + Queso Extra`;
    }
  
    getCost() {
      return this.pizza.getCost() + 20;
    }
  }
  
  module.exports = CheeseDecorator;
  