let greetUser = (name = "Guest") => {
    if (name === "") {
      name = "Guest";
    }
    return `Hello, ${name}!`;
  };




console.log(greetUser("Nika")); 
console.log(greetUser(""));             
console.log(greetUser());              