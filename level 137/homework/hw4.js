function transformToMap(jsonStr) {
    const arr = JSON.parse(jsonStr);
    const result = {};
    arr.forEach(obj => {
      result[obj.id] = obj.value;
    });
    return result;
  }
  