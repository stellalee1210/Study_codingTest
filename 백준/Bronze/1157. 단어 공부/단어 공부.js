const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const word = input[0].toLocaleUpperCase();
let alphabet = Array.from({ length: 26 }).fill(0);

[...word].forEach((letter) => {
  const idx = letter.charCodeAt() - 65;
  alphabet[idx]++;
});

const max = Math.max(...alphabet);
const answer = [];
for (let i = 0; i < alphabet.length; i++) {
  if (alphabet[i] === max) answer.push(String.fromCharCode(i + 65));
}
console.log(answer.length > 1 ? "?" : answer[0]);
