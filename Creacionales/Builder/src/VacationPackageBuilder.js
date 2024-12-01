const VacationPackage = require('./VacationPackage');

class VacationPackageBuilder {
  constructor() {
    this.vacationPackage = new VacationPackage();
  }

  setFlight(flight) {
    this.vacationPackage.setFlight(flight);
    return this; // Permite el encadenamiento de métodos
  }

  setHotel(hotel) {
    this.vacationPackage.setHotel(hotel);
    return this; // Permite el encadenamiento de métodos
  }

  setTransport(transport) {
    this.vacationPackage.setTransport(transport);
    return this; // Permite el encadenamiento de métodos
  }

  addActivity(activity) {
    this.vacationPackage.addActivity(activity);
    return this; // Permite el encadenamiento de métodos
  }

  build() {
    return this.vacationPackage;
  }
}

module.exports = VacationPackageBuilder;
