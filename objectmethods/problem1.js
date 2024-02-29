var rectangle = {
    length: 0,
    width: 0,
  
    area() {
      return this.length * this.width;
    },
  
    perimeter() {
      return 2 * (this.length + this.width);
    },
  };
  
  rectangle.length = 5;
  rectangle.width = 4;
  console.log("Area:", rectangle.area());
  console.log("Perimeter:", rectangle.perimeter());
  