const Product = require('./Product');

class Electronics extends Product {
  constructor(name, price, warranty, brand) {
    super(name, price, 'Electronico');
    this.warranty = warranty;
    this.brand = brand;
  }

  clone() {
    // Clonación específica para Electronics
    const clone = super.clone();
    clone.warranty = this.warranty;
    clone.brand = this.brand;
    return clone;
  }

  getInfo() {
    return `${super.getInfo()} - Garantia: ${this.warranty} años, Marca: ${this.brand}`;
  }
}

module.exports = Electronics;
