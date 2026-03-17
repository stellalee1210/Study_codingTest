const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

input.pop();
const numbers = input.map(Number);

const answers = [];

numbers.forEach(number => {
    const temp = [1]
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            temp.push(i)
            temp.push(number / i)
        }
    }

    const sortedTemp = temp.sort((a, b) => a - b);
    const total = sortedTemp.reduce((acc, cur) => acc + cur)
    if (total === number) {
        answers.push(`${number} = ${sortedTemp.join(" + ")}`);
        return;
    }

    answers.push([`${number} is NOT perfect.`])
})


console.log(answers.join('\n'))