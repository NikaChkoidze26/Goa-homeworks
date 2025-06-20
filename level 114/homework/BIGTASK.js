let studentData = [
  {
    id: 1,
    name: "Anna",
    grades: {
      Math: [90, 95],
      History: [80],
      Science: [100]
    },
    attendance: [true, true, false, true],
    extracurricular: ["Debate Team", "Chess"]
  },
  {
    id: 2,
    name: "Ben",
    grades: {
      Math: [60, 65],
      History: [50],
      Science: [70]
    },
    attendance: [false, false, true],
    extracurricular: []
  }
];

// 1
studentData.forEach(student => {
  console.log(`Hello, ${student.name}!`);
});

// 2
let studentNames = studentData.map(s => s.name);
console.log(studentNames); 

// 3
let studentAverages = studentData.map(student => {
  let allScores = Object.values(student.grades).flat();
  let avg = allScores.reduce((a, b) => a + b, 0) / allScores.length;
  return { name: student.name, average: avg };
});
console.log(studentAverages);

// 4
let highPerformingStudents = studentAverages.filter(s => s.average >= 85);
console.log(highPerformingStudents);

// 5
let strugglingStudents = studentData.filter(student =>
  Object.values(student.grades).some(subjectScores =>
    subjectScores.every(score => score < 70)
  )
);
console.log(strugglingStudents);

// 6
let totalActivities = studentData.reduce((sum, s) => sum + s.extracurricular.length, 0);
console.log(totalActivities);

// 7
let subjectTotals = {};
let subjectCounts = {};

studentData.forEach(student => {
  for (let subject in student.grades) {
    let scores = student.grades[subject];
    if (!subjectTotals[subject]) {
      subjectTotals[subject] = 0;
      subjectCounts[subject] = 0;
    }
    subjectTotals[subject] += scores.reduce((a, b) => a + b, 0);
    subjectCounts[subject] += scores.length;
  }
});

let subjectAverages = Object.keys(subjectTotals).map(subject => ({
  subject,
  avg: subjectTotals[subject] / subjectCounts[subject]
}));

let highestSubject = subjectAverages.reduce((max, curr) =>
  curr.avg > max.avg ? curr : max
).subject;

console.log(highestSubject);


// 9
let allHaveGoodAttendance = studentData.every(student => {
  let total = student.attendance.length;
  let present = student.attendance.filter(a => a).length;
  return present / total >= 0.5;
});
console.log(allHaveGoodAttendance);

// 10
let hasInactiveStudent = studentData.some(s => s.extracurricular.length === 0);
console.log(hasInactiveStudent); 
