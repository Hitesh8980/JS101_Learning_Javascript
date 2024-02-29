function customIncludes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
        return true;
      }
    }
    return false;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let included = customIncludes(numbers, 3);
  console.log(included);
  