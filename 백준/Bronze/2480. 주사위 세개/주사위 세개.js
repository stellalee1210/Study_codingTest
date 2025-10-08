const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [...dices] = input[0].trim().split(" ").map(Number).sort((a,b)=>a-b);
if(dices[0] === dices[2]){
    console.log(10000 + dices[0] * 1000);
}else if(dices[0] === dices[1] || dices[1]  === dices[2]){
    console.log(1000 + dices[1] * 100);
}else{
    console.log(dices[2] * 100);
}