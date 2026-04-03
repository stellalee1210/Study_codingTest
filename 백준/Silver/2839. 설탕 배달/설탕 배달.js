const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const number = Number(input);

if (number < 5) {
    console.log(number % 3 === 0 ? 1 : -1);
    return
}

if (number % 5 === 0) {
    console.log(number / 5);
    return
}

let trial = Math.floor(Number(input) / 5);

let answer = -1;

while (trial >= 0) {
    const left = number - trial * 5;

    if (left % 3 === 0) {
        answer = trial + left / 3;

        trial = 0;
        break;
    }

    trial--;
}

console.log(answer);