function swapCase(char) {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  
  function swapCaseString(str) {
    return str.split("").map(swapCase).join("");
  }
  
  const iS = "Test";
  
  const oS = swapCaseString(iS);
  console.log(oS);
  