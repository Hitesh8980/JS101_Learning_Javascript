function Difference(num1, num2) {
    return num1 - num2;
  }
  
  function absoluteValue(num) {
    if (num < 0) {
      return -num;
    } else {
      return num;
    }
  }
  
  function absoluteDifference(num1, num2) {
    return absoluteValue(Difference(num1, num2));
  }
  
  console.log("Sample Output-1:", absoluteDifference(12, 4));
  console.log("Sample Output-2:", absoluteDifference(4, 18));
  