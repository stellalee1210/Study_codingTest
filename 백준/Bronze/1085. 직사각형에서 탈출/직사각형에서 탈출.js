const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [userX, userY, rectX, rectY] = input[0].split(' ').map(Number);

function calculateMinLengthMove(userY, rectY) {
    const upper = rectY - userY;
    return upper < userY ? upper : userY;
}

function calculateMinWidthMove(userX, rectX) {
    const left = rectX - userX;
    return left < userX ? left : userX;
}

const minLengthMove = calculateMinLengthMove(userY, rectY);
const minWidthMove = calculateMinWidthMove(userX, rectX);

console.log(minLengthMove < minWidthMove ? minLengthMove : minWidthMove)