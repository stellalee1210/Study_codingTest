const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const targetNum = input[0].split(" ").map(Number)[1];
const numArr = input[1].split(" ").map(Number);
const result = numArr.filter((num) => num < targetNum);
console.log(result.join(" "));
