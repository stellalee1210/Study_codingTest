const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];
const answer = {
  max: 0,
  index: 0,
};

rl.on("line", (line) => {
  /*입력값 처리 코드*/
  const raw = line.trim();
  if (!isNaN(Number(raw))) {
    if (answer.max < Number(raw)) {
      answer.max = Number(raw);
      answer.index = inputs.length;
    }
    inputs.push(Number(raw));
  }
  if (inputs.length === 9) {
    rl.close();
  }
});

rl.on("close", () => {
  console.log(`${answer.max}\n${answer.index + 1}`);
  process.exit();
});
