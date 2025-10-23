function solution(clothes) {
    const map = new Map();
    clothes.forEach(v=>{
        let value = 1
        if(map.has(v[1])) value += Number(map.get(v[1]))
        map.set(v[1], value)
    })
    const clothesArray = [...map.values()];
    console.log(clothesArray)
    let answer = 1;
    clothesArray.map((v)=> answer *= Number(v+1)) 
    return answer-1;
}