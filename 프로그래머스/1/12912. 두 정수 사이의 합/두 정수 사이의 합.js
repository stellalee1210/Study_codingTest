function solution(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    
    return (num1 + num2) * (Math.max(num1, num2) - Math.min(num1, num2) + 1) / 2
}