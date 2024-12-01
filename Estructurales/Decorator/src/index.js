const BasePizza = require('./BasePizza');
const CheeseDecorator = require('./CheeseDecorator');
const PepperoniDecorator = require('./PepperoniDecorator');
const OlivesDecorator = require('./OlivesDecorator');

// Crear una pizza base
let pizza = new BasePizza();
console.log(`${pizza.getDescription()} cuesta $${pizza.getCost()}`);

// Añadir queso extra
pizza = new CheeseDecorator(pizza);
console.log(`${pizza.getDescription()} cuesta $${pizza.getCost()}`);

// Añadir pepperoni
pizza = new PepperoniDecorator(pizza);
console.log(`${pizza.getDescription()} cuesta $${pizza.getCost()}`);

// Añadir aceitunas
pizza = new OlivesDecorator(pizza);
console.log(`${pizza.getDescription()} cuesta $${pizza.getCost()}`);
