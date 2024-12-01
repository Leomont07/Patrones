class Tablet {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    getDetails() {
      return `Tablet: ${this.brand} ${this.model}`;
    }
  }
  
  module.exports = Tablet;
  