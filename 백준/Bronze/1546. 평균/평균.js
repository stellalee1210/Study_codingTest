const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const count = Number(input[0].trim());
const rawScores = input[1].split(" ").map(Number);
const maxScore = Math.max(...rawScores);
const edittedScores = rawScores.map((num) => (num / maxScore) * 100);
const newAvg = edittedScores.reduce((acc, cur) => acc + cur);
console.log(newAvg / count);
