class OlivesDecorator {
    constructor(pizza) {
      this.pizza = pizza;
    }
  
    getDescription() {
      return `${this.pizza.getDescription()} + Aceitunas`;
    }
  
    getCost() {
      return this.pizza.getCost() + 10;
    }
  }
  
  module.exports = OlivesDecorator;
  