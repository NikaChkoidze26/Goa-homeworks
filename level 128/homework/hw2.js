function sortOddsAndEvens(arr) {
    const odds = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
    const evens = arr.filter(n => n % 2 === 0).sort((a, b) => b - a);
  
    return arr.map(n => n % 2 === 0 ? evens.shift() : odds.shift());
  }
  