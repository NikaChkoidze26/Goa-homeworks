let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7, 8];
let nestedArray = [[9, 10], [11, 12], [13, 14]];

let combinedArray = arr1.concat(arr2);

combinedArray.copyWithin(5, 0, 3);

combinedArray.fill(0, 6);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100, 200);

combinedArray.splice(2, 2, "x", "y", "z");

let slicedArray = combinedArray.slice(-5);

let joinedString = slicedArray.join(",");

let flatArray = nestedArray.flat();

let isEightIncluded = flatArray.includes(8);

let indexOfNine = flatArray.indexOf(9);


