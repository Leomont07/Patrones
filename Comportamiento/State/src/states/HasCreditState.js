class HasCreditState {
    constructor(machine) {
      this.machine = machine;
    }
  
    insertMoney() {
      console.log('Ya se ha insertado dinero. Seleccione un producto.');
    }
  
    selectProduct(product) {
      console.log(`Producto "${product}" seleccionado.`);
      this.machine.setState(this.machine.dispensingState);
    }
  
    dispenseProduct() {
      console.log('Debe seleccionar un producto antes de dispensar.');
    }
  }
  
  module.exports = HasCreditState;
  