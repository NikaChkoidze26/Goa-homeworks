let password = 'Group 25 is best'; 
let attempts = 3; 

function guessPassword() {
    while (attempts > 0) {
        let userInput = prompt("შეიყვანეთ პაროლი:");

        if (userInput === password) {
            alert("თქვენი შეყვანილი პაროლი სწორია");
            return; 
        } else {
            attempts--; 
            if (attempts > 0) {
                alert("არასწორი პაროლი! დარჩენილია " + attempts + " ცდა.");
            }
        }
    }

    alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
}