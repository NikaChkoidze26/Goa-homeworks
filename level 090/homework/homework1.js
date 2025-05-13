let mixedArray = [42, "Hello", true, null, {name: "Nika"}, [1, 2, 3], undefined, 3.14, "GOA BEST!", Number(12345678901234567890)];

console.log("1st value:", mixedArray[0]);  
console.log("2nd value:", mixedArray[1]);  
console.log("3rd value:", mixedArray[2]);  
console.log("4th value:", mixedArray[3]);  
console.log("5th value:", mixedArray[4]);  

mixedArray[5] = [4, 5, 6];            
mixedArray[6] = "New value";          
mixedArray[7] = false;                
mixedArray[8] = "GOA"; 
mixedArray[9] = Number(98765432109876543210);  

console.log("Modified array:", mixedArray);
