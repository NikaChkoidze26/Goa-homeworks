const allFalsy = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        return false;
      }
    }
    return true;
  };
  