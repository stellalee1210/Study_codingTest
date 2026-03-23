const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

if (input[0] == 1) {
    console.log(0)
    return;
}

input.shift();
const coordsArr = input.map(coord => coord.split(' ').map(Number));

const sortByX = coordsArr.sort((a, b) => a[0] - b[0]);
const minXcoord = sortByX[0];
const maxXcoord = sortByX[sortByX.length - 1];

const sortByY = coordsArr.sort((a, b) => a[1] - b[1]);
const minYcoord = sortByY[0];
const maxYcoord = sortByY[sortByX.length - 1];

const width = maxXcoord[0] - minXcoord[0];
const height = maxYcoord[1] - minYcoord[1];
const answer = width * height;
console.log(answer)