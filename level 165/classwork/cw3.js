function validParentheses(parens) {
  let count = 0;

  for (let char of parens) {
    if (char === '(') count++;
    else balance--;

    if (balance < 0) return false; // too many closing brackets
  }

  return balance === 0;
}
