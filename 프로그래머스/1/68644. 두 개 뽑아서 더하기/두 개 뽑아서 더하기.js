function solution(numbers) {
    const set = new Set();
    numbers.forEach((v, i)=>{
        for(let j=i; j<numbers.length;j++){
            if(i != j){
                set.add(v + numbers[j])
            }
        }
    })
    
    return  [...set].sort((a,b) => a-b);
}