class Customer {
    constructor(name) {
      this.name = name;
    }
  
    // Método que será llamado cuando el producto esté disponible
    update(productName) {
      console.log(`${this.name} ha sido notificado: ¡El producto "${productName}" está disponible!`);
    }
  }
  
  module.exports = Customer;
  