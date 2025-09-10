const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const primeNumber = [];
rl.on("line", (line) => {
  /*입력값 처리 코드*/
  const [num1, num2] = line.trim().split(" ");
  const checkPrime = new Array(num2).fill(false);
  checkPrime[0] = checkPrime[1] = true;
  for (let i = 2; i <= Number(num2); i++) {
    if (checkPrime[i]) {
      continue;
    }
    primeNumber.push(i);
    for (let j = i * 2; j <= Number(num2); j += i) {
      checkPrime[j] = true;
    }
  }
  console.log(primeNumber.filter((v) => v >= num1 && v <= num2).join("\n"));
  rl.close();
});

rl.on("close", (array) => {
  process.exit();
});
