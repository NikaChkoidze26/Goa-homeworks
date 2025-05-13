
function weather(weatherNumber) {
    switch (weatherNumber) {
        case 1:
            console.log("მზიანი");
            break;
        case 2:
            console.log("წვიმიანი");
            break;
        case 3:
            console.log("მოღრუბლული");
            break;
        case 4:
            console.log("ქარიანი");
            break;
        default:
            console.log("არ არის დადგენილი");
    }
}


let month = "დეკებერი";

let day = 10; 
let first_half = day <= 15 ? "პირველი ნახევარი" : "მეორე ნახევარი";

console.log(month + " - " + first_half); 
