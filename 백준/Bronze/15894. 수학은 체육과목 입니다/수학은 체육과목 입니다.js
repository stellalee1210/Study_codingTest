const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

console.log(4 * Number(input[0]))