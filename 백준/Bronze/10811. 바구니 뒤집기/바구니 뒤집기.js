const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [len, count] = input[0].split(" ").map(Number);
const arr = Array.from({ length: len }, (_, i) => i + 1);

for (let i = 1; i <= count; i++) {
  const [firstIdx, secondIdx] = input[i].split(" ").map(Number);
  const flipArr = arr.slice(firstIdx - 1, secondIdx).reverse();
  arr.splice(firstIdx - 1, secondIdx - firstIdx + 1, ...flipArr);
}

console.log(arr.join(" "));
