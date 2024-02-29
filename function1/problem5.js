function toLowerCaseArray(array) {
    return array.map((word) => word.toLowerCase());
  }
  
  let inputArray = ["MA", "SA", "I", "SCH", "OOL"];
  let outputArray = toLowerCaseArray(inputArray);
  console.log(outputArray);
  