function replace(s) {
    let result = "";
    let vowels = "aeiouAEIOU";
  
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        result += "!";
      } else {
        result += s[i];
      }
    }
  }