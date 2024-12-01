class VehiculoFactory {
    static createVehicle(type, options) {
      switch (type.toLowerCase()) {
        case 'carro':
          return new (require('./Carro'))(options);
        case 'camion':
          return new (require('./Camion'))(options);
        default:
          throw new Error('Tipo de vehículo no soportado.');
      }
    }
  }
  
  module.exports = VehiculoFactory;
  