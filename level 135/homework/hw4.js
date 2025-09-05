function highAndLow(numbers) {
    let arr = numbers.split(" ").map(Number);
  
    let high = Math.max(...arr);
    let low = Math.min(...arr);
  
    return high + " " + low;
  }
  