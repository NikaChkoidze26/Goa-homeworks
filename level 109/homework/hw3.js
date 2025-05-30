let mixedData = {
    name: "Ana",
    age: 30,
    isActive: true,
    score: 88,
    greeting: "Hello"
  };
  
  for (let key in mixedData) {
    if (typeof mixedData[key] === "number") {
      console.log(`${key}: ${mixedData[key]}`);
    }
  }
  