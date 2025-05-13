function modifyArray() {
    let array1 = [1, 2, 3, 4];
    let array2 = [5, 6, 7, 8];

    let concatArray = [...array1, ...array2];

    concatArray.copyWithin(concatArray.length, 0, 2);

    concatArray.fill(0, concatArray.length - 3, concatArray.length);

    let lastElement = concatArray.pop();
    
    let firstElement = concatArray.shift();

    concatArray.unshift(10, 20);

    return {
        modifiedArray: concatArray,
        lastElement: lastElement,
        firstElement: firstElement
    };
}

console.log(modifyArray());
