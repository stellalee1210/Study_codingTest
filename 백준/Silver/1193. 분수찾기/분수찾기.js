const { time } = require("console");
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const givenNum = Number(input[0]);

let count = 1;
let idx = 1;
let layer = 1;

while (count < givenNum) {
  layer++;
  idx++;
  count += idx;
}

const total = ((layer - 1) * layer) / 2;
const trial = givenNum - total;

if (layer % 2 === 0) {
  console.log(`${trial}/${layer + 1 - givenNum + total}`);
} else if (layer % 2 === 1) {
  console.log(`${layer + 1 - givenNum + total}/${trial}`);
}
