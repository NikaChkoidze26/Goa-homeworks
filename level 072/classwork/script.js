let age = Number(prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი:"));

if (age <= 5) {
    console.log("შენ ხარ ბავშვი");
} else if (age <= 12) {
    console.log("შენ ხარ თინეიჯერი/მოზარდი");
} else if (age <= 18) {
    console.log("შენ ხარ სრულწოვანი");
} else if (age <= 80) {
    console.log("დაბერდი ძმაო");
} else {
    console.log("შენი ასაკი ზედმეტად დიდია");
}