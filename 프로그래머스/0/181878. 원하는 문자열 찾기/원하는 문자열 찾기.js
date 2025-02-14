function solution(myString, pat) {
    return myString.toLowerCase().includes(pat.toLowerCase())?1:0;
}


//or


function solution(myString, pat) {
    return +(myString.toLowerCase().includes(pat.toLowerCase()));
}
