function divisor(num){
    let arr = [];
    for(let i=1; i<=Math.sqrt(num); i++){
        if(num%i ===0){
            arr.push(i);
            if(i*i != num) arr.push(num/i);
        }
    }
    return arr.length;
}

function solution(left, right) {
    let answer = 0;
    for(let i = left; i<=right;i++){
        divisor(i)%2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}