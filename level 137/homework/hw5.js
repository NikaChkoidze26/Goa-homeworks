function validateUsers(jsonStr) {
    const arr = JSON.parse(jsonStr);
    return arr.every(obj => obj.hasOwnProperty("name") && obj.hasOwnProperty("age") && obj.hasOwnProperty("email"));
  }
  