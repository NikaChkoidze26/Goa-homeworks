//1
const p1 = new Promise((resolve) => {
    resolve("Hello, Promise!");
  });
  
  p1.then(message => console.log("1:", message));

  //2
  const p2 = new Promise((_, reject) => {
    reject("Something went wrong!");
  });
  
  p2.catch(error => console.error("2:", error));

//3
  const p3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds have passed");
    }, 2000);
  });
  
p3.then(message => console.log("3:", message));

//4
    const p4 = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
  
  p4.then(result => console.log("4:", result))
    .catch(error => console.error("4:", error));
//5  
  const p5 = new Promise((resolve) => resolve(5));
  
  p5.then(num => num * 2)      
    .then(num => num * 2)     
    .then(num => console.log("5: Final number:", num));
//6  
  const fetchData = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
  
  fetchData.then(data => console.log("6:", data));
  
  console.log("Promises created — waiting for async results...");
  