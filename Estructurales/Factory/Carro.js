class Carro {
    constructor({ brand, model, doors }) {
      this.brand = brand;
      this.model = model;
      this.doors = doors;
    }
  
    drive() {
      return `Manejando un ${this.brand} ${this.model} con ${this.doors} puertas.`;
    }
  }
  
  module.exports = Carro;
  