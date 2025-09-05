function sumNested(arr) {
    let sum = 0;
  
    for (let item of arr) {
      if (Array.isArray(item)) {
        sum += sumNested(item);
      } else if (typeof item === "number") {
        sum += item;
      }
    }
  
    return sum;
  }