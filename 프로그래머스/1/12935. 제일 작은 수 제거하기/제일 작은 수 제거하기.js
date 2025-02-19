function solution(arr) {
    const idx = arr.indexOf(Math.min.apply(null, arr),0);
    arr.splice(idx,1);
    return arr.length === 0? [-1] : arr;
}

//or


function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
