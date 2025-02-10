function solution(myString, pat) {
    const answer = myString.replace(/A/g, "C").replace(/B/g,"A").replace(/C/g,"B");
    
    if(answer.includes(pat)){
        return 1;
    }else{
        return 0;
    }
}