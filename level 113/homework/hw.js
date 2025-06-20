// 1
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); 


// 2
let words = ["apple", "car", "banana", "pen"];
let hasLongString = words.some(word => word.length > 5);
console.log(hasLongString); 


// 3
let users = [
  { name: "Ana", age: 20 },
  { name: "Luka", age: 25 },
  { name: "Nika", age: 18 }
];
let allAdults = users.every(user => user.age >= 18);
console.log(allAdults); 


// 4
let products = [
  { name: "Phone", price: 250 },
  { name: "Pen", price: 2 },
  { name: "Laptop", price: 1000 }
];
let hasAffordableProduct = products.some(product => product.price < 20);
console.log(hasAffordableProduct); 


// 5
let customerOrders = [
    { orderId: 1, items: ["apple", "banana"] },
    { orderId: 2, items: ["bread"] },
    { orderId: 3, items: ["milk", "eggs"] }
  ];
  
  let allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
  
  console.log(allOrdersHaveItems); 

// 7
customerOrders.forEach(order => {
    console.log(`Processing Order ID: ${order.orderId}`);
  });


  
  