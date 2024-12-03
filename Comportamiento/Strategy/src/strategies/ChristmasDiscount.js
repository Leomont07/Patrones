class ChristmasDiscount {
    calculate(price) {
      const discount = price * 0.3; // 30% de descuento
      console.log(`Aplicando descuento navideño: -$${discount.toFixed(2)}`);
      return price - discount;
    }
  }
  
  module.exports = ChristmasDiscount;
  