class Camion {
    constructor({ brand, model, capacity }) {
      this.brand = brand;
      this.model = model;
      this.capacity = capacity;
    }
  
    drive() {
      return `Manejando un ${this.brand} ${this.model} con ${this.capacity} toneladas de capacidad.`;
    }
  }
  
  module.exports = Camion;
  