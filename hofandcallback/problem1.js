let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum = 0;
let count = 0;

for (let i = 1; i < arr.length; i += 2) {
  sum += arr[i];
  count++;
}

let average = sum / count;
console.log(average);
