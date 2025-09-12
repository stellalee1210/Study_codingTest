const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

rl.on("line", (line) => {
  const n = Number(line.trim());
  const answer = factorial(n);
  console.log(answer);
});

rl.on("close", () => {
  process.exit();
});
