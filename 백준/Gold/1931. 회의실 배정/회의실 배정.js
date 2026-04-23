const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const countOfTime = Number(input.shift());
const timeTables = input.map(v => v.split(' ').map(Number)).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])

let answer = 1;
let curIdx = 0;

for (let i = 1; i < countOfTime; i++) {
    if (timeTables[i][0] >= timeTables[curIdx][1]) {
        answer++;
        curIdx = i
    }
}
console.log(answer)