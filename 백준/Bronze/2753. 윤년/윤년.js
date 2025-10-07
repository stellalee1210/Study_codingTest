const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 문제 풀이
const year = Number(input[0])
console.log((year%4===0 && year%100 !== 0) || year %400 === 0 ? 1 : 0);