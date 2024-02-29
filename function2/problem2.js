function customLastIndexOf(array, searchElement, Index) {
    if (typeof Index === "undefined") {
      Index = array.length - 1;
    }
  
    for (var i = Index; i >= 0; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  
    return -1;
  }
  
  var fruits = ["Apple", "Banana", "Orange", "Banana", "Orange"];
  var lastIndex = customLastIndexOf(fruits, "Banana");
  console.log(lastIndex);
  