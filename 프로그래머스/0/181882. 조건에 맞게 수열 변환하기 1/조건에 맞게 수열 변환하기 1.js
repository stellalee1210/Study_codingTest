function solution(arr) {
    return arr.map(v=>{if(v>=50 &&v%2==0) {return v/=2} else if(v<50 && v%2 ==1) {return v*=2} else return v});
}

//or

function solution(arr) {
    return arr.map(v=>v>=50&&v%2==0?v/=2:v<50&&v%2==1?v*=2:v);
}
