function digitalRoot(n) {
    while (n >= 10) {
      let sum = 0;
      let digits = n.toString().split("");
      
      for (let d of digits) {
        sum += Number(d); 
      }
      
      n = sum;
    }
    
    return n;
  }
  