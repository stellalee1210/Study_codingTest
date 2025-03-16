function solution(sizes) {
    let width = 0
    let length = 0
    
    for(let i =0 ; i<sizes.length; i++) {
        const tempWidth = Math.max(sizes[i][0], sizes[i][1])
        const tempLength = Math.min(sizes[i][0], sizes[i][1])
        
        width = Math.max(width, tempWidth)
        length = Math.max(length, tempLength)
    }  
    return width * length;
}