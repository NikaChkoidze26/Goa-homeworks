let university = {
    name: "Harvard University",
    departments: 12,
    website: "http://harvard.edu",
    ratings: {
        student1: 4.5,
        student2: 3.9,
        student3: 4.8
    }
};

console.log(university);

if ('scholarship' in university) {
    console.log("The university has a scholarship property.");
} else {
    console.log("The university does not have a scholarship property.");
}

Object.assign(university, { studentsCount: 5000 });
console.log("Updated university object with studentsCount:", university);

Object.freeze(university);

university.name = "New University Name";  
university.location = "USA";  

console.log("University object after attempts to change:", university);

if (Object.isFrozen(university)) {
    console.log("The university object is frozen.");
} else {
    console.log("The university object is not frozen.");
}
