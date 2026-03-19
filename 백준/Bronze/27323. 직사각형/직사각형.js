const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);
const [height, width] = [Number(input[0]), Number(input[1])];

console.log(height * width)