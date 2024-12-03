class VIPDiscount {
    calculate(price) {
      const discount = price * 0.2; // 20% de descuento
      console.log(`Aplicando descuento VIP: -$${discount.toFixed(2)}`);
      return price - discount;
    }
  }
  
  module.exports = VIPDiscount;
  