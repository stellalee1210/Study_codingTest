const { stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line', (line)=>{
    const [n1, n2, n3] = line.trim().split(' ');
    console.log(Number(n1) + Number(n2) + Number(n3))
})