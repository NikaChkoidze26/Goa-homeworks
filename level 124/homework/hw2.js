let fruits = new Map([
    ["Apple", "Red"],
    ["Banana", "Yellow"],
    ["Grapes", "Purple"]
  ]);
  
  fruits.set("Orange", "Orange");
  fruits.set("Lemon", "Yellow");
  
  fruits.delete("Banana");
  
  console.log("Final Fruits Map:");
  fruits.forEach((color, fruit) => {
    console.log(`${fruit} → ${color}`);
  });
  