const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const inputArr = input[0].split(" ");

const number = inputArr[0].split("").reverse();
const base = Number(inputArr[1]);

let result = 0;
number.forEach((value, idx) => {
  let transNum = 0;
  if (Number.isInteger(Number(value))) {
    transNum = Number(value) * base ** idx;
  } else {
    transNum = (value.charCodeAt() - 55) * base ** idx;
  }
  result += transNum;
});

console.log(result);
