function extractNames(jsonStr) {
    const arr = JSON.parse(jsonStr);
    return arr.map(obj => obj.name);
  }
  