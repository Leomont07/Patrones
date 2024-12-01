class Smartphone {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    getDetails() {
      return `Smartphone: ${this.brand} ${this.model}`;
    }
  }
  
  module.exports = Smartphone;
  