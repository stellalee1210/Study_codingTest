function solution(s) {
    return s
        .toLowerCase()
        .split(' ')
        .map(v=>{
            let temp = '';
            for(let i=0; i<v.length;i++){
                if(i%2 ===0) temp += v[i].toUpperCase();
                else if(i%2===1) temp += v[i];
            }
            return temp
        })
        .join(' ');
}