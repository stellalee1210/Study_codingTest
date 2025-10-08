const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [hour, minute] = input[0].trim().split(' ').map(Number);
const timer = Number(input[1].trim());
const [HOUR, MINUTE] = [24, 60];

if(minute + timer >= MINUTE){
    const add_hour = Math.floor((minute+timer)/MINUTE);
    const add_minute = (minute+timer)%MINUTE;
    if(hour + add_hour === HOUR){
        console.log(0, add_minute);
    }else{
        console.log((hour+add_hour)%HOUR, add_minute);
    }
}else{
    console.log(hour, minute+timer)
}