const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
});

rl.on('line',(line)=>{
    const [input1, input2] = line.trim().split(' ');
    const [num1, num2] = [Number(input1), Number(input2)];
    if(num1 === num2){ 
        console.log('==')
    }else{
        console.log(num1 > num2 ? '>': '<')
    }
    rl.close();
})

rl.on('close', ()=>{
    process.exit();
})