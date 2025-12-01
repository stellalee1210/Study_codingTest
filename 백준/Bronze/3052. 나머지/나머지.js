const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const numbers = input.map((num) => Number(num.trim()));
const leftovers = numbers.map((num) => num % 42);
const set = new Set(leftovers);
console.log(set.size);
