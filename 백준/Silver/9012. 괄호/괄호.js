const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
input.shift();

const answer = [];
input.forEach(row => {
    const stack = [];
    const tempArray = row.split('');
    tempArray.map((symbol) => {
        if (stack.length === 0 || symbol === "(") {
            stack.push(symbol)
        } else if (stack[stack.length - 1] === "(") {
            stack.pop()
        }
    })

    if (stack.length === 0) {
        answer.push("YES");
    } else {
        answer.push("NO")
    }
})

console.log(answer.join('\n'))