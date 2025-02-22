function solution(answers) {
    const num1 = [1,2,3,4,5,]
    const num2 = [2,1,2,3,2,4,2,5]
    const num3 = [3,3,1,1,2,2,4,4,5,5]
    let arr = [0,0,0];
    for(let i =0; i<answers.length; i++){
        if(answers[i] === num1[i%5]) arr[0]++;
        if(answers[i] === num2[i%8]) arr[1]++;
        if(answers[i] === num3[i%10]) arr[2]++;
    }
    const max = Math.max(...arr)
    return arr.map((v, i) => {if (v === max) return i + 1}).filter(v => v!=null);
}