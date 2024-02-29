function customSlice(array, start, end) {
    if (typeof start === "undefined") {
      start = 0;
    }
    if (typeof end === "undefined") {
      end = array.length;
    }
    if (start < 0) {
      start = Math.max(array.length + start, 0);
    }
    if (end < 0) {
      end = Math.max(array.length + end, 0);
    }
    let slicedArray = [];
  
    for (let i = start; i < end && i < array.length; i++) {
      slicedArray.push(array[i]);
    }
  
    return slicedArray;
  }
  
  let heroes = ["zoro", "naruto", "luffy", "Mashle", "Goku"];
  let slicedheroes = customSlice(heroes, 1, 3);
  console.log(slicedheroes);
  