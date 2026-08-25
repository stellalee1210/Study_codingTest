function solution(food) {
    let answer = '';
    food.shift();
    
    food.forEach((v,idx)=>{
        if(v>1){
            const count = Math.floor(v/2);
            const numbers = (idx+1).toString().repeat(count)
            answer +=numbers;
        }
    })
    const numberArr = answer.split('')
    const reversedAnswer = numberArr.reverse().join('');
    answer += '0' + reversedAnswer;
    return answer;
}