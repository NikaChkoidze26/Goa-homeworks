let pets = new Set();
console.log(pets);

pets.add("cat");
pets.add("dog");
pets.add("parrot");

console.log(pets.has("dog")); 

pets.delete("parrot");

console.log(pets.size);

let nums = new Set([10, 20, 30]);
for (let n of nums) {
  console.log(n);
}

nums.clear();

let mixed = [1, 2, 2, 3, 4, 4];
let mixedSet = new Set(mixed);
console.log(mixedSet);

let arr = [...mixedSet];
console.log(arr);

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}
console.log(hasDuplicates([1, 2, 3, 4])); 
console.log(hasDuplicates([1, 2, 2, 4])); 
