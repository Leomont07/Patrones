class NoCreditState {
    constructor(machine) {
      this.machine = machine;
    }
  
    insertMoney() {
      console.log('Dinero insertado. Puede seleccionar un producto.');
      this.machine.setState(this.machine.hasCreditState);
    }
  
    selectProduct() {
      console.log('Debe insertar dinero antes de seleccionar un producto.');
    }
  
    dispenseProduct() {
      console.log('No se puede dispensar un producto sin crédito.');
    }
  }
  
  module.exports = NoCreditState;
  