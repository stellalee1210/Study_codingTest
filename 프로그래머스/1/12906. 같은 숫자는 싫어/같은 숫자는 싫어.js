function solution(arr)
{
    let answer = [];
    for(let i = 0; i<arr.length; i++){
        if(!i) answer.push(arr[i]);
        else if(arr[i-1] !== arr[i]) answer.push(arr[i]);
    }
    return answer;
}

//or


function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
