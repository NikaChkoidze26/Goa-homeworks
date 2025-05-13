let array = [10, 20, 30, 40, 50];

let checkValue1 = 30;
let checkValue2 = 60;

console.log(array.includes(checkValue1)); 
console.log(array.includes(checkValue2)); 

if (array.includes(checkValue1)) {
  console.log(checkValue1);
}

if (array.includes(checkValue2)) {
  console.log(checkValue2);
}

array.push(60, 70, 80);
console.log(array);

array.pop();
array.pop();
array.pop();
array.pop();
console.log(array);
