function solution(arr) {
    const idx = arr.indexOf(Math.min.apply(null, arr),0);
    arr.splice(idx,1);
    return arr.length === 0? [-1] : arr;
}