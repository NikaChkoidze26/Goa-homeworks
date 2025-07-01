function getMax(a, b, c) {
    return Math.max(a, b, c);
}

let values = [25, 10, 35, 5];

let result = getMax(...values.slice(0, 3));

console.log("Maximum of first three values:", result);
