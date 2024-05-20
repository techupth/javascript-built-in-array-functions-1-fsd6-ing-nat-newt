const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let scoreList = students.map((student) => student.score);
  let sumScore = scoreList.reduce((acc, cur) => acc + cur);
  let avgScore = sumScore / students.length;
  console.log(avgScore);
}

getAverageStudentScore(students); // Output: 87.5
