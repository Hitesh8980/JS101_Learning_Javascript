function customSubstring(string, start, end) {
    if (typeof start === "undefined") {
      start = 0;
    }
    if (typeof end === "undefined") {
      end = string.length;
    }
    if (start < 0) {
      start = Math.max(string.length + start, 0);
    }
    if (end < 0) {
      end = Math.max(string.length + end, 0);
    }
  
    let substring = "";
  
    for (let i = start; i < end && i < string.length; i++) {
      substring += string[i];
    }
  
    return substring;
  }
  
  let str = "Hello, world!";
  let sub = customSubstring(str, 7, 12);
  console.log(sub);
  