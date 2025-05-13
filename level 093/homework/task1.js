let arr1 = ["Orange","Watermelon","Strawberry","Melon","Apple"]

let arr2 = ["Potato","Tomato","Cucumber","Carrot"]

let arr3 = ["Giorgi","Goga","Luka","Nika","Mate"]

let mergedArray = [...arr1,...arr2]

mergedArray.copyWithin(0,2,4)

mergedArray.fill("0",6)

mergedArray.pop()

mergedArray.shift()

mergedArray.unshift(100,200)

mergedArray.splice(2,2,...arr3)

let slicedArray = mergedArray.slice(7,12)


console.log(slicedArray.join("-"))