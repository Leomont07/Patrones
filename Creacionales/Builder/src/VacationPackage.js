class VacationPackage {
    constructor() {
      this.flight = null;
      this.hotel = null;
      this.transport = null;
      this.activities = [];
    }
  
    setFlight(flight) {
      this.flight = flight;
    }
  
    setHotel(hotel) {
      this.hotel = hotel;
    }
  
    setTransport(transport) {
      this.transport = transport;
    }
  
    addActivity(activity) {
      this.activities.push(activity);
    }
  
    getDetails() {
      return {
        flight: this.flight,
        hotel: this.hotel,
        transport: this.transport,
        activities: this.activities,
      };
    }
  }
  
  module.exports = VacationPackage;
  