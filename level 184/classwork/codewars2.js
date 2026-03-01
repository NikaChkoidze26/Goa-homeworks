function solve(s) {
  let lower = 0;
  let upper = 0;

  for (let ch of s) {
    if (ch === ch.toLowerCase()) lower++;
    else upper++;
  }

  if (upper > lower) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}