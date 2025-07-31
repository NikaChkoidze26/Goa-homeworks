function countWords(sentence) {
    let words = sentence.toLowerCase().split(/\s+/);
    let wordMap = new Map();
  
    for (let word of words) {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
  
    return wordMap;
  }
  
  let sentence = "this is a test and this is fun";
  let wordCounts = countWords(sentence);
  
  console.log("Word Counts:");
  wordCounts.forEach((count, word) => {
    console.log(`${word}: ${count}`);
  });
  