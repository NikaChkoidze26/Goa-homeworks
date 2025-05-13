function findMin(a, b, c) {
    return (a <= b && a <= c) ? a : (b <= c ? b : c);
  }