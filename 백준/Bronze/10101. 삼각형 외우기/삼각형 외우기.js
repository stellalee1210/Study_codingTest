const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const angles = input.map(Number).sort((a, b) => a - b);
if (angles.reduce((acc, cur) => acc + cur) !== 180) {
    console.log('Error')
} else if (angles[0] === angles[1] && angles[0] === angles[2]) {
    console.log('Equilateral');
} else if (angles[0] === angles[1] || angles[1] === angles[2]) {
    console.log('Isosceles')
} else {
    console.log('Scalene')
}

