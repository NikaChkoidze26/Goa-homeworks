let mySet = new Set();

mySet.add("apple");
mySet.add("banana");

console.log(mySet.has("apple")); 

console.log(mySet.size);

mySet.delete("banana");

mySet.clear();

mySet.add("cat");
mySet.add("dog");
mySet.forEach(item => console.log(item));

let arrFromSet = [...mySet];
console.log(arrFromSet);

let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);
let union = new Set([...a, ...b]);
console.log(union);

let intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);
