const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const str = input[0].split("");
let answer = Array.from({ length: 26 }).fill(-1);

for (let i = 0; i < str.length; i++) {
  const idx = str[i].charCodeAt() - 97;
  if (answer[idx] === -1) {
    answer[idx] = i;
  }
}

console.log(answer.join(" "));
