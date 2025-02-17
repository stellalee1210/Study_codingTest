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