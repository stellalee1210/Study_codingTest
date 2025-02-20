function solution(t, p) {
    return t
        .split('')
        .map((v,i) => t.slice(i, i+p.length))
        .slice(0, t.length - p.length + 1)
        .filter(num => num <= p)
        .length
}