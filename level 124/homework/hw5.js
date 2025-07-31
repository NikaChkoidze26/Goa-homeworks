let fruitsArray = Array.from(fruits);  
console.log("Map as Array:", fruitsArray);

let newFruitsMap = new Map(fruitsArray);  
console.log("Array back to Map:");
newFruitsMap.forEach((color, fruit) => {
  console.log(`${fruit} → ${color}`);
});
