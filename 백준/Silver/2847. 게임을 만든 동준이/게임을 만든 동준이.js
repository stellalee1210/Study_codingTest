const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const levelCount = Number(input.shift());
const levelArray = input.map(Number).reverse();

let curLevel = levelArray[0];
let answer = 0;
for (let i = 1; i < levelCount; i++) {
    if (curLevel <= levelArray[i]) {
        curLevel -= 1
        answer += levelArray[i] - curLevel
        continue
    }
    curLevel = levelArray[i]
}

console.log(answer)