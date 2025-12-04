const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const count = Number(input[0]);

for (let i = 0; i < count; i++) {
  const blank = " ".repeat(count - 1 - i);
  const star = "*".repeat(2 * i + 1);
  console.log(blank + star);
}

for (let i = count - 2; i >= 0; i--) {
  const blank = " ".repeat(count - 1 - i);
  const star = "*".repeat(2 * i + 1);
  console.log(blank + star);
}
