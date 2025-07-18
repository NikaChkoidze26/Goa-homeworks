const person = { name: "Alex", age: 20, city: "Tbilisi" };

for (let key in person) {
  console.log(key, ":", person[key]); 
}

const numbers = [10, 20, 30];


for (let num of numbers) {
  console.log(num); 
}
