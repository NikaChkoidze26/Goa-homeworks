let XO = str => {
    let lowerXo = str.toLowerCase();
    let x = [...lowerXo].filter(char => char === "x").length;
    let o = [...lowerXo].filter(char => char === "o").length;
    return x === o;
  }