class PepperoniDecorator {
    constructor(pizza) {
      this.pizza = pizza;
    }
  
    getDescription() {
      return `${this.pizza.getDescription()} + Pepperoni`;
    }
  
    getCost() {
      return this.pizza.getCost() + 15;
    }
  }
  
  module.exports = PepperoniDecorator;
  