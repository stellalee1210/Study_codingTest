function solution(todo_list, finished) {
    let newList = [];
    for(let i=0; i<=finished.length; i++){
        if(finished[i] === false){
            newList.push(todo_list[i])
        }
    }
    return newList;
}


//or

function solution(todo_list, finished) {
    return todo_list.filter((e,i) => !finished[i]);
}
