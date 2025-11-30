const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [len, count] = input[0].split(" ").map(Number);
const map = new Map();

for (let i = 1; i <= count; i++) {
  const trial = input[i].split(" ").map(Number);
  for (let j = trial[0]; j <= trial[1]; j++) {
    map.set(j, trial[2]);
  }
}

const answer = [];

for (let c = 0; c < len; c++) {
  const value = map.get(c + 1);
  answer.push(value ? value : 0);
}

console.log(answer.join(" "));
