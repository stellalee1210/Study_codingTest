const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = parseInt(input[0]);
let result = "";

for (let i = 0; i < n; i++) {
  const [num1, num2] = input[i + 1].split(" ").map(Number);
  result += `Case #${i + 1}: ${num1 + num2}\n`;
}
console.log(result);
