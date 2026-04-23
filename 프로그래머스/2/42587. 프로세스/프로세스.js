function solution(priorities, location) {
    let trial= 0;
    const sortedPriorities = [...priorities].sort((a,b)=>b-a);
    const arr = priorities.map((v,i)=> ({ 'priority': priorities[i], 'valid':i===location}));

    let largestP = sortedPriorities.shift()
    while (arr.length !== 0){
        const cur = arr.shift();
        
        if(cur.priority === largestP){
            trial++;
            largestP = sortedPriorities.shift()
            
            if(cur.valid) return trial;
            continue;
        }
        arr.push(cur);
        
    }
    return 0;
}