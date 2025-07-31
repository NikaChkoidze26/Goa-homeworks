function getAverage(marks) {
    const sum = marks.reduce((acc, val) => acc + val, 0);
    return Math.floor(sum / marks.length);
  }