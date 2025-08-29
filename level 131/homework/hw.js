//სინქრონული კოდი სრულდება რიგრიგობით და ბლოკავს მომდევნო ნაბიჯებს, ხოლო ასინქრონული კოდი შესრულებას არ ბლოკავს და შედეგს მოგვიანებით აბრუნებს


console.log("Start");
let sum = 5 + 10;
console.log("Sum:", sum);
console.log("End");

let text = "hello";
let upper = text.toUpperCase();
console.log(upper);

for (let i = 1; i <= 3; i++) {
    console.log(i);
  }
  
