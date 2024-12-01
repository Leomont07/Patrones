const Smartphone = require('../devices/Smartphone');
const Tablet = require('../devices/Tablet');

class AppleFactory {
  createSmartphone() {
    return new Smartphone('Apple', 'iPhone 15');
  }

  createTablet() {
    return new Tablet('Apple', 'iPad Pro');
  }
}

module.exports = AppleFactory;
