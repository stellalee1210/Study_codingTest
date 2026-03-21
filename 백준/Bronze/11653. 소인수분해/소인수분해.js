const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);
const givenNumber = Number(input[0]);

if (givenNumber === 1) return;

let givenNumberArray = Array.from({ length: givenNumber }, (_, i) => i + 1)
givenNumberArray.shift();

for (let i = 2; i <= givenNumber; i++) {
    if (givenNumberArray[i] === 0) continue;

    for (let j = 2 * i; j <= givenNumber; j += i) {
        givenNumberArray[j - 2] = 0;
    }
}

const primeNumbers = givenNumberArray.filter(v => v > 0);

const answer = [];
let tempNumber = givenNumber
while (tempNumber !== 1) {
    for (let i = 0; i < primeNumbers.length; i++) {
        if (tempNumber % primeNumbers[i] === 0) {
            answer.push(primeNumbers[i])
            tempNumber /= primeNumbers[i]
            break;
        }

        if (i === primeNumbers.length - 1) {
            answer.push(givenNumber)
            return;
        }
    }
}


console.log(answer.sort((a, b) => a - b).join('\n'))