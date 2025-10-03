const { stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line.trim());
    if(input.length === 2){
        const [input1, input2] = input.join(' '). split(' ');
        const value = [];
        for(let i =0; i< input2.length; i++){
            value.push(Number(input1) * Number(input2[input2.length - i - 1]));
            console.log(value[i]);
        }
        console.log(value.reduce((acc, cur, idx)=> acc+cur*(10 ** idx)));
    }
})