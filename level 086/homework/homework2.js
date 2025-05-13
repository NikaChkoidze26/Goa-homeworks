let student = {
    name: "ნიკა",
    age: 21,
    faculty: "კომპიუტერული მეცნიერება",
    course: 3,
    averageGrade: 87
};


console.log(student);

console.log("Name:", student.name);         //Dot
console.log("Age:", student["age"]);        //Baket
console.log("Faculty:", student.faculty);       //Dot
console.log("Course:", student["course"]);      //Bracket
console.log("Average Grade:", student.averageGrade);     //Dot


let sentence = `${student.name} is ${student.age} years old, studying at the faculty of ${student.faculty}. He is in course ${student.course} and his average grade is ${student.averageGrade}.`;

console.log(sentence);
