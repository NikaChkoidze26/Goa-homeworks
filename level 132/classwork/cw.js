const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('ოპერაცია წარმატებით დასრულდა');
      } else {
        reject(new Error('ოპერაცია ჩავარდა'));
      }
    }, 2000);
  });
  
  promise
    .then(result => {
      console.log('then:', result);
    })
    .catch(error => {
      console.error('catch:', error.message);
    })
    .finally(() => {
      console.log('finally: resources cleared / cleanup done');
    });
  