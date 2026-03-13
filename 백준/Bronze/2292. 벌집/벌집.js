const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const number = Number(input[0]);

let layer = 1;
let count = 1;
while (count < number) {
  layer++;
  count += (layer - 1) * 6;
}

console.log(layer);
