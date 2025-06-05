function isFalsy(value) {
    if (value === false) {
      return true;
    }
    if (value === 0) {
      return true;
    }
    if (value === "") {
      return true;
    }
    if (value === null) {
      return true;
    }
    if (value === undefined) {
      return true;
    }
    if (value === 0n) {
        return true
    }
    if (value === -0) {
        return true
    }
    else {
        return false
    }
    }

