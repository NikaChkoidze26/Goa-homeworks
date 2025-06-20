let nums = [10, 5, 2, 7, 19, 203];

let difference = nums.reduceRight((acc, curr) => acc - curr);

console.log(`სხვაობა: ${difference}`);
