function solution(n) {
    const n_ones = n.toString(2).replace(/0/gi,'').length;
    let answer = n+1;
    while(answer>n){
        if(answer.toString(2).replace(/0/gi,'').length === n_ones) break;
        else answer++;     
    }
    return answer;
}