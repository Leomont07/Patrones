const readline = require('readline');
const DeviceFactory = require('./factories/DeviceFactory');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

(async () => {
  try {
    const brand = await promptUser('¿Qué marca de dispositivos deseas crear? (Apple/Samsung): ');

    const factory = DeviceFactory.getFactory(brand);

    const smartphone = factory.createSmartphone();
    const tablet = factory.createTablet();

    console.log(smartphone.getDetails());
    console.log(tablet.getDetails());
  } catch (error) {
    console.error('Ocurrió un error:', error);
  } finally {
    rl.close();
  }
})();
