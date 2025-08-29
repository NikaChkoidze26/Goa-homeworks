let promise = new Promise((resolve) => {
    resolve(5);
  });
  
  promise
    .then(num => {
      let result = num * 2;
      console.log(result);
      return result;
    })
    .then(num => {
      let result = num * 2;
      console.log(result);
      return result;
    })
    .then(num => {
      let result = num * 2;
      console.log(result);
      return result;
    });
  