const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const start = input[i][0];
  const end = input[i][input[i].length - 1];
  console.log(start + end);
}
