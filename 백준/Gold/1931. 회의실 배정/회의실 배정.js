const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const meetingCount = Number(input.shift());
const meetingArray = input.map(v => v.split(" ").map(Number)).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

let curEndTime = 0;
let answer = 0;
for (let i = 0; i < meetingCount; i++) {
    if (meetingArray[i][0] >= curEndTime) {
        curEndTime = meetingArray[i][1]
        answer++;
    }
}

console.log(answer)