function solution(n) {
    let arr = [];
    const sqrtNum = Math.sqrt(n);
    for(let i=1; i<=sqrtNum; i++){
        if(n%i ===0){
            arr.push(i);
            if(i*i != n) arr.push(n/i);
        }
    }
    return arr.reduce((acc, cur) => acc+cur, 0);
}


//or


function solution(n) {
    let sum = 0;
    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i ===0){
            sum += i;
            if(i*i != n) sum+=(n/i);
        }
    }
    return sum;
}
