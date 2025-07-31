let countries = new Map();

countries.set("France", "Paris");
countries.set("Germany", "Berlin");
countries.set("Italy", "Rome");
countries.set("Spain", "Madrid");
countries.set("Japan", "Tokyo");

console.log("Countries and Capitals:");
countries.forEach((capital, country) => {
  console.log(`${country} → ${capital}`);
});
