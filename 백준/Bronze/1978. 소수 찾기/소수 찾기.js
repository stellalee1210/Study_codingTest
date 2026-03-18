const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);



const divisor = numbers.map(number => {
    if (number <= 1) return 0;

    let divisorCount = 0;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) divisorCount += 1;
    }

    return divisorCount > 0 ? 0 : 1;
})

const answer = divisor.reduce((acc, cur) => acc + cur)
console.log(answer)