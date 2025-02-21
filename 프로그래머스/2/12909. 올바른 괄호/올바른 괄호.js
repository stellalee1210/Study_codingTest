function solution(s){
    let answer = 0;
    s.split('').forEach(col=>{
        if(answer<0) return false;
        if(col === '(')
            answer+=1;
        else if(col === ')')
            answer-=1;
    });
    return answer === 0 ? true : false;
}