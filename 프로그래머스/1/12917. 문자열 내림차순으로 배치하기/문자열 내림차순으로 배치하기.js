function solution(s) {
    return Array.from(s).sort((a,b) => b > a ? 1 : -1).join('');
}