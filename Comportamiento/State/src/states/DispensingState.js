class DispensingState {
    constructor(machine) {
      this.machine = machine;
    }
  
    insertMoney() {
      console.log('Espere a que se dispense el producto antes de insertar más dinero.');
    }
  
    selectProduct() {
      console.log('Espere a que se dispense el producto actual.');
    }
  
    dispenseProduct() {
      console.log('Dispensando producto...');
      this.machine.setState(this.machine.noCreditState);
    }
  }
  
  module.exports = DispensingState;
  