const numberObj = Object.freeze({
    0 : 'zero',
    1:	'one',
    2:	'two',
    3:	'three',
    4:	'four',
    5:	'five',
    6:	'six',
    7:	'seven',
    8:	'eight',
    9:	'nine'
})

const findKeyByValue = (value) =>{
    return Object.keys(numberObj).find(key => numberObj[key] === value)
}

function solution(s) {
    if(Number(s)) return Number(s)
    let answer = s
    Object.values(numberObj).forEach(value=>{
         answer = answer.replaceAll(value, findKeyByValue(value))
    })
    
    return Number(answer);
}