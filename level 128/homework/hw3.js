function deleteDigit(n) {
    const digits = n.toString();
    let max = 0;
  
    for (let i = 0; i < digits.length; i++) {
      const newNum = parseInt(digits.slice(0, i) + digits.slice(i + 1));
      if (newNum > max) {
        max = newNum;
      }
    }
  
    return max;
  }
  