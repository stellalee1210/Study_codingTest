const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
input.map((row) => row.split(" "));

let maxRow = 0;
input.forEach((row) => {
  if (maxRow <= row.length) {
    maxRow = row.length;
  }
});

const answer = [];
for (let i = 0; i < maxRow; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) {
      answer.push(input[j][i]);
    }
  }
}
console.log(answer.join(""));
