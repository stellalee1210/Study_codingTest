function solution(x) {
    const sum = Array.from(x+'').reduce((acc,cur)=> parseInt(acc)+parseInt(cur))
    return x%sum===0 ;
}