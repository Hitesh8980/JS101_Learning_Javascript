function ProductsCart(names, quantities, prices) {
    this.data = [];
  
    for (let i = 0; i < names.length; i++) {
      this.data.push({
        name: names[i],
        quantity: quantities[i],
        price: prices[i],
      });
    }
  
    this.total = function () {
      let totalValue = 0;
      for (let i = 0; i < this.data.length; i++) {
        totalValue += this.data[i].quantity * this.data[i].price;
      }
      return totalValue;
    };
  }
  
  let names = ["Rice", "Dal", "Salt"];
  let quantities = [2, 3, 1];
  let prices = [60, 50, 20];
  
  let cart = new ProductsCart(names, quantities, prices);
  
  console.log("Total:", cart.total());
  