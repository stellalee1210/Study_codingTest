function solution(genres, plays) {
    const songsMap = new Map();
    const playsMap = new Map();
    
    genres.forEach((v,i) =>{
        if(songsMap.has(v)){
            const currentPlay = playsMap.get(v);
            playsMap.set(v, currentPlay + plays[i]);
            
            const value = songsMap.get(v);
            value.push(i);
            value.sort((a,b) => {
                if(plays[b] === plays[a]) return a - b
                return plays[b] - plays[a] 
            });
            if(value.length > 2) value.pop()
            songsMap.set(v, value);
        } else{
            songsMap.set(v, [i]);
            playsMap.set(v, plays[i])
        }
    })
    const sortedPlays = [...playsMap.keys()].sort((a,b)=> playsMap.get(b) - playsMap.get(a))
    const answer = sortedPlays.map(v=> songsMap.get(v))
    return answer.reduce((acc,cur)=>[...acc,...cur]);
}