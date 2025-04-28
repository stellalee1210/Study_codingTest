function solution(s) {
    return [...s].map((v, i) => {
        const temp = s.slice(0,i).lastIndexOf(v)
        return temp != -1 ? i - temp : temp
    });
}