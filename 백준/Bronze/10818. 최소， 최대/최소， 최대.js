const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const arrLen = Number(input[0]);
const numArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const minNum = numArr[0];
const maxNum = numArr[arrLen - 1];
console.log(minNum, maxNum);
