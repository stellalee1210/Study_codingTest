function solution(n) {
    return parseInt(Array.from(n+'').sort((a,b) => b-a).join(''));
}