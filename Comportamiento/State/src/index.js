const VendingMachine = require('./VendingMachine');

const machine = new VendingMachine();

// Escenario de uso de la máquina expendedora
console.log('\n--- Intentando seleccionar un producto sin crédito ---');
machine.selectProduct('Coca-Cola');

console.log('\n--- Insertando dinero ---');
machine.insertMoney();

console.log('\n--- Seleccionando un producto ---');
machine.selectProduct('Coca-Cola');

console.log('\n--- Dispensando el producto ---');
machine.dispenseProduct();

console.log('\n--- Insertando dinero nuevamente ---');
machine.insertMoney();
