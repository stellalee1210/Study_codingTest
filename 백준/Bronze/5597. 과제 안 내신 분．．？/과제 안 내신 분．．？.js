const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const totalStu = Array.from({ length: 30 }, (_, i) => i + 1);
const presentStu = [];
input.forEach((num) => {
  presentStu.push(Number(num.trim()));
});
presentStu.sort((a, b) => a - b);

const answer = totalStu.filter((num) => !presentStu.includes(num));
console.log(answer.join(`\n`));
