const countTruthiesAndFalsies = (array) => {
    let result = { truthy: 0, falsy: 0 };
  
    array.forEach((item) => {
      if (item) {
        result.truthy++;
      } else {
        result.falsy++;
      }
    });
  
    return result;
  };
  