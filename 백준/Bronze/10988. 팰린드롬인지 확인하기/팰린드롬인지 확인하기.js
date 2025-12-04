const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const wordLength = Math.floor(Number(input[0].length));
const front = input[0].slice(0, wordLength / 2);
const back =
  wordLength % 2 === 1
    ? input[0].slice(wordLength / 2 + 1)
    : input[0].slice(wordLength / 2);

const reverseFront = [...front].reverse().join("");

if (reverseFront == back) {
  console.log(1);
} else {
  console.log(0);
}
