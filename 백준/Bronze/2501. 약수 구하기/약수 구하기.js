const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [number, nthDivisor] = input[0].split(' ').map(Number);
const divisors = [];

for (let i = 0; i <= number; i++) {
    if (number % i === 0) divisors.push(i)
}

if (divisors.length < nthDivisor) {
    console.log(0);
} else {
    console.log(divisors[nthDivisor - 1])
}