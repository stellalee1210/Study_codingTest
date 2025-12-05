const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const count = Number(input[0]);

const checkLetter = (word) => {
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    const firstIndex = word.indexOf(letter);
    const lastIndex = word.lastIndexOf(letter);
    const slicedStr = word
      .slice(firstIndex, lastIndex + 1)
      .split(letter)
      .join("");

    if (slicedStr.length > 0) return false;
  }
  return true;
};

let answer = 0;
for (let i = 1; i <= count; i++) {
  if (checkLetter(input[i])) answer += 1;
}

console.log(answer);
