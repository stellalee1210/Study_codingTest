const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [speed, slip, goal] = input[0].split(" ").map(Number);

const days = Math.ceil((goal - speed) / (speed - slip)) + 1;
console.log(days);
