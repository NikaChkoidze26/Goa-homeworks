function getInactive(jsonStr) {
    const arr = JSON.parse(jsonStr);
    return arr.filter(obj => obj.active === false);
  }
  