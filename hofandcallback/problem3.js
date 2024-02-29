let arr = [3, 4, 5, 6, 7];
let output = "";

arr.forEach((num, index) => {
  if (index % 2 === 0) {
    output += num;
    if (index < arr.length - 2) {
      output += "-";
    }
  }
});

console.log(output);
