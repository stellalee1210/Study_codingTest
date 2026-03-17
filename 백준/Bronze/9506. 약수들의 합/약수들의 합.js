const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

input.pop();
const numbers = input.map(Number);

const answers = [];

numbers.forEach(number => {
    const temp = []
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            temp.push(i)
        }
    }

    const total = temp.reduce((acc, cur) => acc + cur)
    if (total === number) {
        answers.push(`${number} = ${temp.join(" + ")}`);
        return;
    }

    answers.push([`${number} is NOT perfect.`])
})


console.log(answers.join('\n'))