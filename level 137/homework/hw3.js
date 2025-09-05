function countHighScores(jsonStr) {
    const arr = JSON.parse(jsonStr);
    return arr.filter(obj => obj.score > 80 && obj.passed === true).length;
  }
  