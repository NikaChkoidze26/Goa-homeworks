const checkType = (value) => {
    const type = typeof value;
    if (value === null || (type !== 'object' && type !== 'function')) {
      return "primitive";
    } else {
      return "non-primitive";
    }
  };
  