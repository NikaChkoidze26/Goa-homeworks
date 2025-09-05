let jsonstring = `[
    { "name": "Nika", "rank": 5, "active": true },
    { "name": "Luka", "rank": 3, "active": false },
    { "name": "Jeko", "rank": 7, "active": true },
    { "name": "Masho", "rank": 6, "active": false },
    { "name": "Barbare", "rank": 8, "active": true }
  ]`;


let Operatives = JSON.parse(jsonString);


let Operatives1 = operatives.filter(op => op.active);


Operatives1.sort((a, b) => b.rank - a.rank);


let Operatives2 = activeOperatives.map(op => 
  `Operative ${op.name} (Rank ${op.rank}) - ACTIVE`
);

console.log(Operatives2);

 