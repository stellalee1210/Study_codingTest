const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
input.shift();

const numberArray = input.map(Number)
const stack = [0];

numberArray.forEach(number => {
    if (number === 0) {
        stack.pop();
    } else {
        stack.push(number)
    }
})

console.log(stack.reduce((acc, cur) => acc + cur))