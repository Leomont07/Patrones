const RegularDiscount = require('./strategies/RegularDiscount');
const VIPDiscount = require('./strategies/VIPDiscount');
const ChristmasDiscount = require('./strategies/ChristmasDiscount');
const DiscountContext = require('./DiscountContext');

// Precio inicial
const price = 100;

// Creación del contexto de descuento
const discountContext = new DiscountContext(new RegularDiscount());

console.log('--- Descuento Regular ---');
let finalPrice = discountContext.calculateDiscount(price);
console.log(`Precio final: $${finalPrice.toFixed(2)}\n`);

console.log('--- Cambiando a Descuento VIP ---');
discountContext.setStrategy(new VIPDiscount());
finalPrice = discountContext.calculateDiscount(price);
console.log(`Precio final: $${finalPrice.toFixed(2)}\n`);

console.log('--- Cambiando a Descuento Navideño ---');
discountContext.setStrategy(new ChristmasDiscount());
finalPrice = discountContext.calculateDiscount(price);
console.log(`Precio final: $${finalPrice.toFixed(2)}`);
