class Product {
    constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    clone() {
      // Se utiliza la serialización y la deserialización para clonar objetos complejos
      const clone = Object.create(this);
      clone.name = this.name;
      clone.price = this.price;
      clone.category = this.category;
      return clone;
    }
  
    getInfo() {
      return `${this.name} (${this.category}) - $${this.price}`;
    }
  }
  
  module.exports = Product;
  