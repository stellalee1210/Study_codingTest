function solution(a, b) {
    let sum = 0;
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    
    for(let i =min; i<=max; i++) sum+= i;
    return sum;
}


//or


function adder(a, b, s = 0){
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
