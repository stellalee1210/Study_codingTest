const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const numbers = input[1].split(" ").map(Number);
const targetNum = Number(input[2]);
console.log(numbers.filter((num) => num === targetNum).length);
