const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [number, base] = input[0].split(" ").map(Number);
console.log(number.toString(base).toUpperCase());
