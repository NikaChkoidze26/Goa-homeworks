let productPrices = {
    bread: 1.5,
    milk: 2.0,
    cheese: 4.5
  };
  
  let total = 0;
  for (let key in productPrices) {
    total += productPrices[key];
  }
  console.log("Total price:", total);
  