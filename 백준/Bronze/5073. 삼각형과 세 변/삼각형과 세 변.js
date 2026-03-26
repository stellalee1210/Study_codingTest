const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
input.pop()
const sides = input.map(triangle => triangle.split(' ').map(Number).sort((a, b) => a - b));
const answer = [];

sides.forEach(triangle => {
    if (triangle[2] >= triangle[0] + triangle[1]) {
        answer.push('Invalid')
    } else if (triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
        answer.push('Equilateral')
    } else if (triangle[0] === triangle[1] || triangle[1] === triangle[2]) {
        answer.push('Isosceles')
    } else {
        answer.push('Scalene')
    }
})

console.log(answer.join('\n'))