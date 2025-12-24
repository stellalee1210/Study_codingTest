const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const maxNumArray = [];
input.forEach((row) => {
  const rowArray = row.split(" ").map(Number);
  const max = Math.max(...rowArray);
  const index = rowArray.indexOf(max);

  maxNumArray.push([index, max]);
});

let biggest = 0;
let index = [];
maxNumArray.forEach((row, i) => {
  if (biggest <= row[1]) {
    biggest = row[1];
    index = [i + 1, row[0] + 1];
  }
});

console.log(biggest);
console.log(index.join(" "));
