function contact(name, num) {
    this.name = name;
    this.number = num;
    
    this.print = function() {
        console.log(this.name + this.number);
    }
}

let contact1 = contact("Nika", "123-456-7890");

console.log(contact1)