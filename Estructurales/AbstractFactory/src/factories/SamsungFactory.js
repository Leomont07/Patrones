const Smartphone = require('../devices/Smartphone');
const Tablet = require('../devices/Tablet');

class SamsungFactory {
  createSmartphone() {
    return new Smartphone('Samsung', 'Galaxy S23');
  }

  createTablet() {
    return new Tablet('Samsung', 'Galaxy Tab S9');
  }
}

module.exports = SamsungFactory;
