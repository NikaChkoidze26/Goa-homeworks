function modifyMixedArray() {
    let mixedArray = [1, "two", 3, "four", 5];
    let extendedArray = [...mixedArray, true, false];

    extendedArray.copyWithin(0, 2, 4);

    extendedArray.fill(0, 4, 7);

    extendedArray.pop();

    extendedArray.shift();

    extendedArray.unshift(null, undefined);
    

    return extendedArray;
}

console.log(modifyMixedArray());
