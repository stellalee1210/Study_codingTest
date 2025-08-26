const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numbers = [];

rl.on("line", (line) => {
  /*입력값 처리 코드*/
  const raw = line.trim();
  if (!isNaN(Number(raw))) {
    numbers.push(Number(raw));
  }
  if (numbers.length === 5) {
    rl.close();
  }
});

rl.on("close", (total) => {
  /*입력 이후 실행 코드*/
  console.log(numbers.reduce((acc, cur) => acc + cur, 0));
  process.exit();
});
