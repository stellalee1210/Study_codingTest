const { stdin } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line', (line)=>{
    const arr = line.trim().split(' ');
    const n = arr.length;
    if(n > 1){
        const stack = [];
        let answer = new Array(n).fill(0)
        for(let i =0; i<n; i++){        
            while(stack.length !== 0 && stack[stack.length-1][1] < Number(arr[i])) stack.pop()
            if(stack.length !== 0) answer[i] += stack[stack.length-1][0] + 1;

            stack.push([i, arr[i]])
        }
        console.log(answer.join(' '))
        rl.close(); 
    }
})

rl.on("close", () => {
  process.exit();
});
