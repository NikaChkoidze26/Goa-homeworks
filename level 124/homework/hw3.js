let shoppingList = new Map([
    ["Milk", 2],
    ["Eggs", 12],
    ["Bread", 1]
  ]);
  
  let itemToCheck = "Eggs";
  console.log(shoppingList.has(itemToCheck) ? "Yes" : "No");
  