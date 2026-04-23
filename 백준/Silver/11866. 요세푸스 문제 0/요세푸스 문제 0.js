const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [numOfPeople, location] = input[0].split(' ').map(Number);
const answer = [];
const peopleArray = new Array(numOfPeople).fill(0).map((v, i) => i + 1);

let curLocation = 1;

while (peopleArray.length !== 0) {
    const cur = peopleArray.shift();
    if (curLocation === location) {
        answer.push(cur);
        curLocation = 1;
        continue;
    }
    peopleArray.push(cur)
    curLocation++;
}

console.log(`<${answer.join(', ')}>`)