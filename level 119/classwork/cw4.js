function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird));
  }
  
  let input = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
  let result = gooseFilter(input);
  
  console.log(result);
  