function filterAndSum(threshold, ...numbers) {
    const filtered = numbers.filter(num => num > threshold);
    const sum = filtered.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

  