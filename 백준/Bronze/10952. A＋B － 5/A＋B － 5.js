const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let answer = "";
for (const nums of input) {
  const [num1, num2] = nums.trim().split(" ").map(Number);
  if (num1 + num2 === 0) break;
  answer += num1 + num2 + "\n";
}

console.log(answer);
