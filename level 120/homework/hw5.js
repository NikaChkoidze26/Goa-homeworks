let product = {
    id: 101,
    details: {
      name: "Laptop",
      price: 1200
    }
  };
  
  let { details: { name: productName, price: productPrice } } = product;
  
  console.log(productName);
  console.log(productPrice);
  