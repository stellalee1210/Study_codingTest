function gcd(n,m){
    let gcdNum = 0;
    for (let i=1; i<=Math.min(n,m); i++){
        if(n%i ===0 && m%i ===0) gcdNum = i
    }
    return gcdNum;
}

function lcm(n,m){
    let lcmNum = 1;
    while(true){
        if(lcmNum%n === 0 && lcmNum%m ===0) break;
        lcmNum++;
    }
    return lcmNum;
}

function solution(n, m) {
    return [gcd(n,m), lcm(n,m)];
}