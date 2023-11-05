class Basket {
  constructor(discountPlan) {
    this.discountPlan = discountPlan;
    this.goods = [];
  }

  addGood(good) {
    this.goods.push(good);
  }

  calculateTotalPrice() {
    const totalPrice = this.goods.reduce((acc, good) => acc + good.price, 0);
    return this.discountPlan.applyDiscount(totalPrice);
  }
}

class RegularDiscountPlan {
  applyDiscount(price) {
    return price * 0.9;
  }
}

class VIPDiscountPlan {
  applyDiscount(price) {
    return price * 0.8;
  }
}

class NewClientDiscountPlan {
  applyDiscount(price) {
    return price * 0.95;
  }
}

console.log("Завдання 6 ====================================");

const basket1 = new Basket(new NewClientDiscountPlan());

basket1.addGood({ name: "Product 1", price: 100 });
basket1.addGood({ name: "Product 2", price: 50 });

console.log(basket1.calculateTotalPrice());

