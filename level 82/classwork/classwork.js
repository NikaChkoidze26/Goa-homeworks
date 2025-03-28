function fakeBin(x) {
    let res = ''; 

    for (let i = 0; i < x.length; i++) {
        let currentDigit = x[i]; 

        if (currentDigit < 5) {
            res += '0'; 
        } else {
            res += '1'; 
        }
    }

    return res; 
}

console.log(fakeBin("45385593107843568")); 
