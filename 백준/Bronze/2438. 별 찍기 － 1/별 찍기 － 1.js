const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = parseInt(input[0]);
let result = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
