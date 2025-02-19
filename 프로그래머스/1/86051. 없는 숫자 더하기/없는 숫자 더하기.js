function solution(numbers) {
    return [...'0123456789'].reduce((acc,cur) => acc+parseInt(cur),0) - numbers.filter(num => 0<=num && num <=9).reduce((acc,cur)=> acc+cur, 0);
}