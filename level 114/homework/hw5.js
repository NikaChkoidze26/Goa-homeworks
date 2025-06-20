let products = [
    { name: "Book", price: 25 },
    { name: "Pen", price: 5 }
  ];
  let hasAffordableProduct = products.some(p => p.price < 20);
  console.log(hasAffordableProduct); 