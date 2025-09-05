const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const alphabet = new Array(26).fill(-1);
const pattern = /[a-z]/;

rl.on("line", (line) => {
  /*입력값 처리 코드*/
  const word = line.trim();
  for (const letter of word) {
    if (pattern.test(letter)) {
      const index = letter.charCodeAt(0) - 97;
      const value = word.indexOf(letter);
      alphabet[index] = value;
    }
  }
});

rl.on("close", () => {
  console.log(alphabet.join(" "));
  process.exit();
});
