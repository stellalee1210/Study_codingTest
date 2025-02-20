function solution(d, budget) {
    d.sort((a,b) => a-b);
    let sum = 0;
    let count =0;
    while(sum < budget){
        if(sum+d[count] <= budget){
            sum+=d[count];
            count++;
        }
        else break;
    }
    
    return count;
}