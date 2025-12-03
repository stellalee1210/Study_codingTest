const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

console.log(input[0].charCodeAt(0));
