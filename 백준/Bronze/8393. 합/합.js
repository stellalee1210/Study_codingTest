const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const num = Number(input)
let answer = 0;
for(let i=1; i <= num; i++){
    answer += i;
}

console.log(answer)