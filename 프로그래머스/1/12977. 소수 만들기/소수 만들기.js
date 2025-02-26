function isPrime(number){
    let arr = Array(3000).fill(true).fill(false, 0, 2);
    for(let i=2; i<=Math.sqrt(number); i++){
        if(arr[i]){ 
            for(let j=i*i; j<=arr.length; j+=i){
               arr[j] = false; 
            }
        }
    }
    return arr[number]
}

function solution(nums) {
    let count = 0 ;
    
    for(let i = 0; i<nums.length -2;i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length;k++){
                if(isPrime(nums[i] + nums[j] + nums[k])) count++;
            }
        }
    }
    return count;
}