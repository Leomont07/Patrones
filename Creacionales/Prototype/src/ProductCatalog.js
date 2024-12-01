const Clothing = require('./Clothing');
const Electronics = require('./Electronics');

class ProductCatalog {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProduct(index) {
    return this.products[index];
  }

  cloneProduct(index) {
    const productToClone = this.getProduct(index);
    return productToClone.clone();
  }
}

module.exports = ProductCatalog;
