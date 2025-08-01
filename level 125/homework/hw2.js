let numSet = new Set([1, 2, 3, 4, 5]);

let fruitSet = new Set(["apple", "banana"]);
fruitSet.add("orange");

fruitSet.add("apple");
console.log(fruitSet); 

console.log(fruitSet.has("banana")); 

fruitSet.delete("banana");
console.log(fruitSet);

let colorSet = new Set(["red", "green", "blue"]);
for (let color of colorSet) {
  console.log(color);
}

let nameSet = new Set(["Alice", "Bob", "Charlie"]);
let nameArray = [...nameSet];
console.log(nameArray);

let dupArray = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(dupArray)];
console.log(unique);

let letters = ['a', 'b', 'a', 'c', 'b'];
let uniqueLetters = new Set(letters);
console.log(uniqueLetters.size);

let tempSet = new Set(["x", "y", "z"]);
tempSet.clear();
console.log(tempSet); 
v