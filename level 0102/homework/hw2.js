function isSquare(n) {
    if (n < 0) {
      return false; 
    }
  
    let squareRoot = Math.sqrt(n);
  
    let integerPart = Math.floor(squareRoot);
  
    if (integerPart * integerPart === n) {
      return true;  
    } else {
      return false;
    }
  }
  