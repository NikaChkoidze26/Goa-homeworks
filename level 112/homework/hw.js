// 1
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" }
  ];
  let userWithId3 = users.find(user => user.id === 3);
  console.log(userWithId3); 
  
  
  // 2
  let colors = ["red", "green", "blue", "yellow"];
  colors.reverse(); 
  console.log(colors); 
  
  
  // 3
  let prices = [19.99, 5.49, 15.0, 25.99];
  prices.sort((a, b) => b - a); 
  console.log(prices);
  
  
  // 4
  let myString = "hello world";
  let characters = Array.from(myString);
  console.log(characters); 
  
  
  // 5
  let data1 = [10, 20, 30];
  let data2 = "hello";
  
  let isData1Array = Array.isArray(data1);
  let isData2Array = Array.isArray(data2);
  
  console.log(isData1Array);
  console.log(isData2Array);
  