const readline = require('readline');
const VehiculoFactory = require('./VehiculoFactory');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

(async () => {
  try {
    const type = await promptUser('¿Qué tipo de vehículo deseas crear? (Carro/Camion): ');

    if (!['carro', 'camion'].includes(type.toLowerCase())) {
      console.log('Tipo de vehículo no soportado.');
      rl.close();
      return;
    }

    const brand = await promptUser('Marca del vehículo: ');
    const model = await promptUser('Modelo del vehículo: ');

    let vehicle;
    if (type === 'carro') {
      const doors = await promptUser('Número de puertas: ');
      vehicle = VehiculoFactory.createVehicle('carro', { brand, model, doors: parseInt(doors) });
    } else if (type === 'camion') {
      const capacity = await promptUser('Capacidad en toneladas: ');
      vehicle = VehiculoFactory.createVehicle('camion', { brand, model, capacity: parseFloat(capacity) });
    }

    console.log(vehicle.drive());
  } catch (error) {
    console.error('Ocurrió un error:', error);
  } finally {
    rl.close();
  }
})();
