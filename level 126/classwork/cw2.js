function stray(numbers) {
    return numbers.find(num => numbers.filter(n => n === num).length === 1)
  }