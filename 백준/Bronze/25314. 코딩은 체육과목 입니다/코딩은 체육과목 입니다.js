const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const num = Number(input)
const numberOfLong = Math.floor(num/4);
let answer = '';

for(let i = 0; i<numberOfLong; i++){
    answer += 'long ';
}
console.log(answer+'int')