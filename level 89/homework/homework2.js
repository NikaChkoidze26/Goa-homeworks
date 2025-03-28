function findMultiples(n, limit) {
    let multiples = [];
    
 
    for (let i = n; i <= limit; i += n) {
        multiples.push(i);
    }
    
    return multiples;
}

console.log(findMultiples(2, 6)); 
console.log(findMultiples(2, 5)); 
