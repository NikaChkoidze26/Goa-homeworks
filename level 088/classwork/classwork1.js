const user1 = {
    name: "ნიკა",
    status: "parent",
    review: "მომწონს ექსტრაკურიკულარული კურსი!"
};

const user2 = {
    name: "მარიამი",
    status: "child",
    review: "საინტერესო და გასართობი მასალაა განვითარებისთვის!"
};

const user3 = {
    name: "გიორგი",
    status: "parent",
    review: "მომწონს პროგრამის სტრუქტურა და სასწავლო პროცესი."
};

const academy = {
    name: "Goal Oriented Academy",
    courses: ["Web Development", "Design", "GameDevelopment"],
    socialLink: "https://www.youtube.com/@Goal_Oriented_Academy__GOA",
    reviews: [
        user1,
        user2,
        user3
    ]
};

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log(academy.hasOwnProperty("courses"));

console.log(academy.hasOwnProperty("reviews"));

const newAcademy = Object.assign({}, academy);
console.log(newAcademy);

Object.freeze(newAcademy);

console.log(Object.isFrozen(newAcademy));

newAcademy.name = "New Academy";
console.log(newAcademy);
