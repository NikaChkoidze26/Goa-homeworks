function person(name, age, profession) {

    this.name = name;
    this.age = age;
    this.profession = profession;


    this.introduce = function() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
    };
}


let person1 = new person("John", 30, "Software Developer");


person1.introduce(); 
