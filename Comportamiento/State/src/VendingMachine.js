const NoCreditState = require('./states/NoCreditState');
const HasCreditState = require('./states/HasCreditState');
const DispensingState = require('./states/DispensingState');

class VendingMachine {
  constructor() {
    this.noCreditState = new NoCreditState(this);
    this.hasCreditState = new HasCreditState(this);
    this.dispensingState = new DispensingState(this);
    this.currentState = this.noCreditState; // Estado inicial
  }

  setState(newState) {
    this.currentState = newState;
  }

  insertMoney() {
    this.currentState.insertMoney();
  }

  selectProduct(product) {
    this.currentState.selectProduct(product);
  }

  dispenseProduct() {
    this.currentState.dispenseProduct();
  }
}

module.exports = VendingMachine;
