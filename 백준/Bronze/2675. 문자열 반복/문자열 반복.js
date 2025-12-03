const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const count = Number(input[0]);
for (let i = 1; i <= count; i++) {
  const [rawNum, str] = input[i].split(" ");
  const num = Number(rawNum);
  let answer = "";
  [...str].forEach((e) => {
    answer += e.repeat(num);
  });
  console.log(answer);
}
