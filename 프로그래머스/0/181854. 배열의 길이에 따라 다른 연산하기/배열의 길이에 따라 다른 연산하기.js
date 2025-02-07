function solution(arr, n) {
    const arrLength = arr.length;
    const left = arrLength%2 ? 0 : 1;
    
    for(let i = left; i< arrLength; i+=2){
        arr[i] += n;
    }
    
    return arr;
}