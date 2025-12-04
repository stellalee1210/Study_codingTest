const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const horses = [1, 1, 2, 2, 2, 8];
const dh = input[0].split(" ").map(Number);
const answer = [];
for (let i = 0; i < horses.length; i++) {
  if (dh[i] === horses[i]) {
    answer.push(0);
  } else {
    answer.push(horses[i] - dh[i]);
  }
}

console.log(answer.join(" "));
