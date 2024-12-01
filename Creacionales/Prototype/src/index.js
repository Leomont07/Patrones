const ProductCatalog = require('./ProductCatalog');
const Clothing = require('./Clothing');
const Electronics = require('./Electronics');

const catalog = new ProductCatalog();

// Crear productos
const shirt = new Clothing('Playera', 19.99, 'M', 'Roja');
const laptop = new Electronics('Laptop', 899.99, 2, 'Dell');

// Añadir productos al catálogo
catalog.addProduct(shirt);
catalog.addProduct(laptop);

// Mostrar información del producto original
console.log('Producto Original 1:', catalog.getProduct(0).getInfo());
console.log('Producto Original 2:', catalog.getProduct(1).getInfo());

// Clonar productos
const clonedShirt = catalog.cloneProduct(0);
const clonedLaptop = catalog.cloneProduct(1);

// Mostrar información de los productos clonados
console.log('Producto Clonado 1:', clonedShirt.getInfo());
console.log('Producto Clonado 2:', clonedLaptop.getInfo());

// Modificar el producto clonado
clonedShirt.color = 'Azul';
clonedLaptop.warranty = 4;

console.log('Producto Clonado Modificado 1:', clonedShirt.getInfo());
console.log('Producto Clonado Modificado 2:', clonedLaptop.getInfo());
