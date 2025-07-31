function sortMapByKey(originalMap) {
    let sorted = new Map([...originalMap.entries()].sort((a, b) => {
      return a[0].localeCompare(b[0]);
    }));
    return sorted;
  }
  
  const sortedCountries = sortMapByKey(countries);
  console.log("Sorted Countries Map:");
  sortedCountries.forEach((capital, country) => {
    console.log(`${country} → ${capital}`);
  });
  