function solution(arr, divisor) {
    let answer = arr.filter(num => num%divisor ===0).sort((a,b) => a-b);
    return answer.length === 0 ? [-1] : answer;
}