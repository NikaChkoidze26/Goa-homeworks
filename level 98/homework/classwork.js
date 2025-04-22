function fakeBin(x) {
    let result = '';
    
    for (let i = 0; i < x.length; i++) {
      let digit = x[i];
      
      if (digit < '5') {
        result += '0';
      } else {
        result += '1';
      }
    }
    
    return result;
  }
  