function solution(s)
{
    let stack = [];
    s.split('').forEach(v=>{
        if(stack.at(-1) === v){
            stack.pop();
        }else{
            stack.push(v);
        }
        
    })
    return stack.length === 0 ? 1 : 0;
}