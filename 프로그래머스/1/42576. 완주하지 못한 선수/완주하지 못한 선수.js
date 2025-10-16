function initialize_map(participant){
    const participantMap = new Map();
    for(const name of participant){
        if(participantMap.has(name)){
            const count = participantMap.get(name);
            participantMap.set(name, count+1)
            continue;
        }
        participantMap.set(name, 1)
    }
    return participantMap;
}

function solution(participant, completion) {
    const participantMap = initialize_map(participant)
    let answer = '';
    completion.forEach((person)=>{
        const count = participantMap.get(person);
        if(participantMap.has(person)) participantMap.set(person, count-1)
        if(participantMap.get(person) === 0) participantMap.delete(person)
    })
    return [...participantMap][0][0];
}