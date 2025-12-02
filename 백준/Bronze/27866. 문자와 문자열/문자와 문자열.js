const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const str = input[0];
const idx = Number(input[1]);
console.log(str[idx - 1]);
