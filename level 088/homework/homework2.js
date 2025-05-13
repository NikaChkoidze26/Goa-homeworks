let sportsClub = {
    clubName: "Barcelona FC",
    sportType: "Football",
    foundedYear: 1899,
    achievements: {
        title1: "Champions League Winner 2005",
        title2: "National Cup Winner 2010",
        title3: "Super Cup Winner 2015"
    }
};

console.log("Properties of sportsClub:", Object.keys(sportsClub));

console.log("Values of sportsClub:", Object.values(sportsClub));

if ('sponsors' in sportsClub) {
    console.log("The club has sponsors.");
} else {
    console.log("The club does not have sponsors.");
}

Object.assign(sportsClub, { stadiumCapacity: 50000 });
console.log("Updated sportsClub object with stadiumCapacity:", sportsClub);

Object.freeze(sportsClub);

sportsClub.clubName = "New Barcelona FC";  
sportsClub.stadiumCapacity = 60000;     

console.log("sportsClub object after attempts to change:", sportsClub);

if (Object.isFrozen(sportsClub)) {
    console.log("The sportsClub object is frozen.");
} else {
    console.log("The sportsClub object is not frozen.");
}
