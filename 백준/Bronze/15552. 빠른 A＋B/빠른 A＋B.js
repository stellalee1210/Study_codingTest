const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const count = Number(input[0].trim());
let result = "";

for (let i = 1; i <= count; i++) {
  const [num1, num2] = input[i].split(" ").map(Number);
  result += num1 + num2 + "\n";
}

console.log(result);
