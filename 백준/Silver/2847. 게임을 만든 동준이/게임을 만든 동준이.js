const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const countOfLevels = Number(input.shift());

let levels = input.map(Number).reverse();
let answer = 0;
for (let i = 1; i < countOfLevels; i++) {
    if (levels[i - 1] <= levels[i]) {
        answer += levels[i] - levels[i - 1] + 1
        levels[i] = levels[i - 1] - 1;
    }
}

console.log(answer)