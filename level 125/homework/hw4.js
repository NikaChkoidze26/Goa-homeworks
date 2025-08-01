// 1
function uniqueWords(sentence) {
    return new Set(sentence.toLowerCase().split(" "));
  }
  console.log(uniqueWords("The sun shines and the moon glows"));
  
  // 2
  function setIntersection(s1, s2) {
    return new Set([...s1].filter(x => s2.has(x)));
  }
  
  // 3
  function setDifference(a, b) {
    return new Set([...a].filter(x => !b.has(x)));
  }
  
  // 4
  function countUniqueChars(str) {
    return new Set(str).size;
  }
  console.log(countUniqueChars("hello"));
  
  // 5
  function sameUnique(arr1, arr2) {
    return (
      new Set(arr1).size === new Set(arr2).size &&
      [...new Set(arr1)].every(item => new Set(arr2).has(item))
    );
  }
  
  // 6
  function removeDuplicateSubarrays(arr) {
    const seen = new Set();
    return arr.filter(sub => {
      let key = JSON.stringify(sub);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  
  // 7
  function filterByUniqueId(arr) {
    const seen = new Set();
    return arr.filter(obj => {
      if (seen.has(obj.id)) return false;
      seen.add(obj.id);
      return true;
    });
  }
  
  // 8
  function countUniqueVisitors(users) {
    return new Set(users).size;
  }
  console.log(countUniqueVisitors(["john", "alice", "john", "bob"])); 
  
  // 9
  function divBy3and5(arr) {
    return new Set(arr.filter(n => n % 3 === 0 && n % 5 === 0));
  }
  
  // 10
  function allUniqueChars(word) {
    return new Set(word).size === word.length;
  }
  