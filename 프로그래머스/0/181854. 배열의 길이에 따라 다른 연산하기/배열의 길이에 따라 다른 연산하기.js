function solution(arr, n) {
    const arrLength = arr.length;
    const left = arrLength%2 ? 0 : 1;
    
    for(let i = left; i< arrLength; i+=2){
        arr[i] += n;
    }
    
    return arr;
}



function solution(arr, n) {
    if(arr.length%2){
        arr = arr.map((v,i) => i%2?v:v+n)
    }else{
        arr = arr.map((v,i) => i%2?v+n:v)
    }
    return arr;
}

/*
시간복잡도 : O(1) -> O(m) : m은 arr의 길이
공간복잡도 : O(1) -> O(m) : m은 arr의 길이 ; map은 새로운 배열을 리턴하기 때문에 길이에 따라 달라짐
*/
