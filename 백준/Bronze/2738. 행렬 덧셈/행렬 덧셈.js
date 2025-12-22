const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const numbers = input.slice();
const [row, column] = numbers.shift().split(" ").map(Number);

const matrix1 = numbers.slice(0, row).map((v) => v.split(" ").map(Number));
const matrix2 = numbers.slice(row).map((v) => v.split(" ").map(Number));
const answer = [];

matrix1.forEach((row, rowIdx) => {
  const temp = [];
  row.forEach((column, columnIdx) => {
    temp.push(column + matrix2[rowIdx][columnIdx]);
  });
  answer.push(temp);
});

console.log(answer.map((r) => r.join(" ")).join("\n"));
