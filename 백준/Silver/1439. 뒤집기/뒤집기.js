const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  const string = line.trim().replace(/ /g, "");
  const flipCount = [0, 0];
  if (string[0] === "0") {
    flipCount[1] += 1;
  } else if (string[0] === "1") {
    flipCount[0] += 1;
  }
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] !== string[i + 1]) {
      if (string[i] === "0") {
        flipCount[0] += 1;
      } else if (string[i] === "1") {
        flipCount[1] += 1;
      }
    }
  }
  console.log(Math.min(flipCount[0], flipCount[1]));
  rl.close();
});

rl.on("close", (array) => {
  process.exit();
});
