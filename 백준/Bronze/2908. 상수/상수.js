const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [num1, num2] = input[0].split(" ");
const reverseNum1 = [...num1].reverse().join("");
const reverseNum2 = [...num2].reverse().join("");

console.log(
  Number(reverseNum1) > Number(reverseNum2) ? reverseNum1 : reverseNum2
);
