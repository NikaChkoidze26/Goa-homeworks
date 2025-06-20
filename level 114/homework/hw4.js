let users = [
    { name: "Ana", age: 22 },
    { name: "Luka", age: 19 }
  ];
  let allAdults = users.every(user => user.age >= 18);
  console.log(allAdults); 