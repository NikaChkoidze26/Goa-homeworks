function modifyArray() {
    let numsArray = [1, 2, 3, 4, 5];
    let strArray = ["a", "b", "c", "d", "e"];

    let Array = [...numsArray, ...strArray];

    Array.copyWithin(4, 0, 3);

    Array.fill("filled", 2, 5);

    Array.pop();

    Array.shift();

    Array.unshift(100, 200);

    return Array;
}

console.log(modifyArray());
