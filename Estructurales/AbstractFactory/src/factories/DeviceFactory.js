const AppleFactory = require('./AppleFactory');
const SamsungFactory = require('./SamsungFactory');

class DeviceFactory {
  static getFactory(brand) {
    switch (brand.toLowerCase()) {
      case 'apple':
        return new AppleFactory();
      case 'samsung':
        return new SamsungFactory();
      default:
        throw new Error('Marca no soportada.');
    }
  }
}

module.exports = DeviceFactory;
