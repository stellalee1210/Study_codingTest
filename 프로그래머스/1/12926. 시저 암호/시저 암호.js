function solution(s, n) {
    return [...s].map(v=>{
        const letter = v.charCodeAt()
        if(letter === 32){
            return v
        }else if(letter >= 65 && letter <= 90){
            return letter + n > 90 ? String.fromCharCode(letter + n - 90 + 64) : String.fromCharCode(letter + n) 
        }else if(letter >= 97 && letter <= 122){
            return letter + n > 122 ? String.fromCharCode(letter + n - 122 + 96) : String.fromCharCode(letter + n) 
        }
    }).toString().replace(/,/g, '');
}