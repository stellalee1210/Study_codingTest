function solution(n) {
    let count = 0;
    let k = 1;
    
    while (k * (k + 1) / 2 <= n) {  
        let sum = n - (k * (k - 1)) / 2; 
        if (sum % k === 0) {  
            count++;
        }
        k++;
    }
    return count;
}