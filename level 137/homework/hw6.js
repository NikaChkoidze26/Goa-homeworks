function sortByPriority(jsonStr) {
    const arr = JSON.parse(jsonStr);
    return arr.sort((a, b) => a.priority - b.priority);
  }
  