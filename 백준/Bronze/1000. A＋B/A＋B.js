const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
});

rl.on('line', (line)=>{
    const [num1, num2]= line.trim().split(" ");
    console.log(Number(num1) + Number(num2));
    rl.close();
})

rl.on('close', ()=>{
    process.exit();
})