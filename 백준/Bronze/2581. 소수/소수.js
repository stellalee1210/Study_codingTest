const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);
const [min, max] = [input[0], input[1]]

const primeNumbers = [];

for (let i = min; i <= max; i++) {
    if (i === 1) continue;

    let divisorCount = 1;
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if (i % j === 0) divisorCount++;
    }

    if (divisorCount === 1) primeNumbers.push(i);
}

if (primeNumbers.length === 0) {
    console.log(-1);
} else {
    const minPrimeNumber = primeNumbers[0]
    const sum = primeNumbers.reduce((acc, cur) => acc += cur)
    console.log(`${sum}\n${minPrimeNumber}`)
}