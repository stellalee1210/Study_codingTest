function solution(priorities, location) {
    let answer = -1;
    let largestP = Math.max(...priorities);
    let trial= 0;
    const arr = new Array(priorities.length).fill(0).map((v,i)=> v ={ 'priority': priorities[i], 'valid':false});
    arr[location].valid = true;
    
    while (arr.length !== 0){
        const cur = arr.shift();
        
        if(cur.priority === largestP){
            trial++;
            largestP = Math.max(...arr.map(v=>v.priority))
            
            if(cur.valid) answer = trial;
            continue;
        }
        arr.push(cur);
        
    }
    
    return answer;
}