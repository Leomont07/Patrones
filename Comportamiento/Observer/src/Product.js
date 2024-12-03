class Product {
    constructor(name) {
      this.name = name;
      this.isAvailable = false;
      this.observers = []; // Lista de observadores
    }
  
    // Método para añadir un observador
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Método para eliminar un observador
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    // Método para notificar a los observadores
    notifyObservers() {
      console.log(`Notificando a los clientes que el producto "${this.name}" está disponible.`);
      this.observers.forEach((observer) => observer.update(this.name));
    }
  
    // Cambiar la disponibilidad del producto
    setAvailability(status) {
      this.isAvailable = status;
      if (status) {
        this.notifyObservers();
      }
    }
  }
  
  module.exports = Product;
  