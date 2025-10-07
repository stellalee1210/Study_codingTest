const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [hour, minute] = input[0].split(' ').map(Number);
const [HOUR, MINUTE] = [23, 60]

if(minute < 45){
    if(hour > 0 ) console.log(hour - 1, MINUTE + minute - 45);
    if(hour === 0) console.log(23, MINUTE + minute - 45)
}else{
    console.log(hour, minute - 45)
}