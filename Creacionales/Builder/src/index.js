const VacationPackageBuilder = require('./VacationPackageBuilder');

// Crear una instancia del builder
const builder = new VacationPackageBuilder();

// Construir el paquete de vacaciones paso a paso
const vacationPackage = builder
  .setFlight('Vuelo hacia Bali')
  .setHotel('Hotel 5 estrellas en Bali')
  .setTransport('Renta de carro privado')
  .addActivity('Snorkel')
  .addActivity('Surfear')
  .build();

// Mostrar los detalles del paquete de vacaciones
console.log(vacationPackage.getDetails());
