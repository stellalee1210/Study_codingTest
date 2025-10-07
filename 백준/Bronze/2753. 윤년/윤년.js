const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
});

rl.on('line',(line)=>{
    const year = Number(line.trim())
    console.log((year%4===0 && year%100 !== 0) || year %400 === 0 ? 1 : 0);
    rl.close();
})

rl.on('close', ()=>{
    process.exit();
})