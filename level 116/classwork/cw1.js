// ძველი ტიპის ობიექტი

const name = "Nika";
const age = 14;
const job = "Developer";

const personOld = {
  name: name,
  age: age,
  job: job,
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(personOld.greet());  


// გაუმჯობესებული ობიექტი

const name2 = "Nika";
const age2 = 14;
const job2 = "Developer";

const personNew = {
  name,        //name: name
  age,         //age: age
  job,         //job: job

  greet() {    //function 
    return `Hello, my name is ${this.name}`;
  }
};

console.log(personNew.greet());
