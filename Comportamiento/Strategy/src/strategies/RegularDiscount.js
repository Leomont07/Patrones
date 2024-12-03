class RegularDiscount {
    calculate(price) {
      const discount = price * 0.05; // 5% de descuento
      console.log(`Aplicando descuento regular: -$${discount.toFixed(2)}`);
      return price - discount;
    }
  }
  
  module.exports = RegularDiscount;
  