let person = {
    name: "გიორგი",
    age: 25,
    city: "თბილისი"
  };
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  