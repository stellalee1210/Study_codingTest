function solution(A,B){
    B.sort((a,b)=>b-a);
    return A.sort((a,b) => a-b).reduce((acc,cur, idx)=> acc += cur*B[idx], 0);
}