const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [len, count] = input[0].split(" ").map(Number);

const numArr = [];
for (let i = 0; i <= len; i++) numArr.push(i);

for (let i = 1; i <= count; i++) {
  const [num1, num2] = input[i].split(" ").map(Number);
  [numArr[num2], numArr[num1]] = [numArr[num1], numArr[num2]];
}
numArr.shift();
console.log(numArr.join(" "));
