const { stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line', (line)=>{
    const [input1, input2, input3] = line.trim().split(' ');
    const [num1, num2, num3] = [Number(input1), Number(input2), Number(input3)];
    console.log((num1+num2)%num3)
    console.log(((num1%num3)+(num2%num3))%num3);
    console.log((num1*num2)%num3)
    console.log(((num1%num3)*(num2%num3))%num3)
    rl.close();
})

rl.on('close', ()=>{
    process.exit();
})