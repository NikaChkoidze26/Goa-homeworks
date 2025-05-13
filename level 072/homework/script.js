// დავალება 1

const number = Number(prompt("შეიყვანეთ რიცხვი:"));
if (number % 2 === 0) {
    console.log(number + " არის ლუწი.");
} else {
    console.log(number + " არის კენტი.");
}

// დავალება 2

const temperature = Number(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:"));
if (temperature < 10) {
    console.log("ტემპერატურა ცივია.");
} else if (temperature >= 10) {
    if (temperature <= 25) {
    console.log("ტემპერატურა ზომიერია.");
} else {
    console.log("ტემპერატურა ცხელი.");
}
}


// დავალება 3

const score =  Number(prompt("შეიყვანეთ ქულა (0-100):"));
if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score < 90) {
    console.log("B")
} else if (score >= 70 && score < 80) {
    console.log("C");
} else if (score >= 60 && score < 70) {
    console.log("D");
} else if (score >= 0 && score < 60) {
    console.log("F");
} else {
    console.log("შეყვანილი ქულა არასწორია.");
}


