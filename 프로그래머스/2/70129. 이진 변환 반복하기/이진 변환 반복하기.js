function solution(s) {
    let answer = [0,0];
    while(s != 1){
    let len = s.length
    
    answer[0]++;    
    s = s.replace(/0/gi, '')
    answer[1] += len - s.length;
    s= s.length.toString(2)
    }
    return answer;
}