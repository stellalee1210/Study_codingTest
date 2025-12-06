const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const gradeArr = [
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],
];
const gradeMap = new Map();
gradeArr.forEach((v) => {
  gradeMap.set(v[0], v[1]);
});

const answer = [];
let totalScore = 0;
input.forEach((subject) => {
  const splittedSubject = subject.split(" ");
  if (splittedSubject[2] === "P") return;
  const [score, grade] = [Number(splittedSubject[1]), splittedSubject[2]];

  totalScore += score;
  answer.push(score * gradeMap.get(grade));
});
console.log(answer.reduce((acc, cur) => acc + cur) / totalScore);
