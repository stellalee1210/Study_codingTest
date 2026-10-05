function solution(array, commands) {
    const answer = []
    commands.forEach((command)=>{
        const [start, end, idx] = [...command.map(v=>v-1)]
        const slicedArr = array.slice(start, end+1).sort((a,b)=>a-b)
        answer.push(slicedArr[idx])
    })
    
    return answer;
}