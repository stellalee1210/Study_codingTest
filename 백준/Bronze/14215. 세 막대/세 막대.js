const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const sides = input[0].split(' ').map(Number).sort((a, b) => a - b);

if (sides[0] === sides[1] && sides[1] === sides[2]) {
    console.log(sides[0] * 3);
} else if (sides[0] + sides[1] <= sides[2]) {
    console.log(2 * (sides[0] + sides[1]) - 1)
} else {
    console.log(sides.reduce((acc, cur) => acc + cur))
}