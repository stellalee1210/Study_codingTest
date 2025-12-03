const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const numArr = input[1].split("").map(Number);
const sum = numArr.reduce((acc, cur) => acc + cur);
console.log(sum);
