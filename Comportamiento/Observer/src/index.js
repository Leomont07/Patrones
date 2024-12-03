const Product = require('./Product');
const Customer = require('./Customer');

// Crear instancias de productos
const laptop = new Product('Laptop Dell XPS 15');
const phone = new Product('iPhone 15 Pro');

// Crear instancias de clientes
const customer1 = new Customer('Leonardo');
const customer2 = new Customer('Monica');
const customer3 = new Customer('Carlos');

// Suscribir clientes al producto "Laptop"
laptop.addObserver(customer1);
laptop.addObserver(customer2);

// Suscribir clientes al producto "iPhone"
phone.addObserver(customer2);
phone.addObserver(customer3);

// Cambiar la disponibilidad del producto y notificar a los clientes
console.log('--- Cambiando la disponibilidad de la Laptop ---');
laptop.setAvailability(true);

console.log('\n--- Cambiando la disponibilidad del iPhone ---');
phone.setAvailability(true);
