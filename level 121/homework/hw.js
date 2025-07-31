// 1
class Dog {
  constructor(name) {
    this.name = name;
  }
}

  //2
function bark() {
  console.log("Woof");
}
  
  // 3
  let myDog = new Dog("Max");
  
  // 4
  console.log(myDog.name);
  
  // 5
  myDog.bark();
  
  // 6
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // 7
    displayInfo() {
      console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    }
  }
  
  // 8
  let car1 = new Car("Toyota", "Camry", 2020);
  let car2 = new Car("Honda", "Civic", 2022);
  
  console.log(car1.model);
  car1.displayInfo();
  
  console.log(car2.model);
  car2.displayInfo();      
  
  // 10
  class Person {
    constructor(name, age = 30) {
      this.name = name;
      this.age = age;
    }
  }
  
  let person1 = new Person("Alice");
  console.log(person1.name, person1.age); 
  
  let person2 = new Person("Bob", 25);
  console.log(person2.name, person2.age); 
  