const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const numberArray = input.map(Number);
const numberSize = numberArray.shift();
const sortedNumberArray = numberArray.sort((a, b) => a - b); //오름차순 정렬

const xySet = new Set();
for (let i = 0; i < numberSize; i++) {
  for (let j = i; j < numberSize; j++) {
    xySet.add(sortedNumberArray[i] + sortedNumberArray[j]);
  }
}

for (let i = numberSize - 1; i > 0; i--) {
  for (let j = 0; j <= i; j++) {
    const k_zValue = sortedNumberArray[i] - sortedNumberArray[j];
    if (xySet.has(k_zValue)) {
      console.log(sortedNumberArray[i]);
      return;
    }
  }
}
