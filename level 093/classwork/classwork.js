function processFruits(fruits) {
    const citrus = fruits.slice(1, 3); 
  
    fruits.splice(-2, 2, 'fig'); 
  
    const fruitString = fruits.join('-');
  
  
    console.log("Citrus:", citrus);     
    console.log("Modified fruits:", fruits); 
    console.log("Fruit string:", fruitString);
  
    return fruitString;
  }
  
