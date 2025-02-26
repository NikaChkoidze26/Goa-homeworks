function fizzBuzz(numbers) {
    let result = '';
    
    for (let num of numbers) {
      if (num % 3 === 0 && num % 5 === 0) {
        result += "Fi ";
      } else if (num % 3 === 0) {
        result += "Fizz ";
      } else if (num % 5 === 0) {
        result += "Buzz ";
      }
    } 
}