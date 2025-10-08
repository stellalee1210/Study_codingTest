const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const len = Number(input[0]);
const numbers = new Array(len).fill(0)

for(let i = 1; i <= len; i++ ){
    const[num1, num2] = input[i].trim().split(' ').map(Number);
    console.log(num1 + num2);
}