const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let [firstX, firstY] = input.shift().split(' ').map(Number);
const coords = input.map(v => v.split(' ').map(Number))
let [answerX, answerY] = [firstX, firstY];

if (coords.some(v => v[0] === answerX)) {
    const coord = coords.filter(v => v[0] !== firstX);
    answerX = coord[0][0];
}
if (coords.some(v => v[1] === answerY)) {
    const coord = coords.filter(v => v[1] !== firstY);
    answerY = coord[0][1];
}
console.log(answerX, answerY)