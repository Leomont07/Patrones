const Product = require('./Product');

class Clothing extends Product {
  constructor(name, price, size, color) {
    super(name, price, 'Ropa');
    this.size = size;
    this.color = color;
  }

  clone() {
    // Clonación específica para Clothing
    const clone = super.clone();
    clone.size = this.size;
    clone.color = this.color;
    return clone;
  }

  getInfo() {
    return `${super.getInfo()} - Tamaño: ${this.size}, Color: ${this.color}`;
  }
}

module.exports = Clothing;
