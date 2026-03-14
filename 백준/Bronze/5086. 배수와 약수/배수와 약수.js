const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
input.pop();

const msg = Object.freeze({
  FACTOR: "factor",
  MULTIPLE: "multiple",
  NEITHER: "neither",
});

const numberArrays = input.map((v) => v.split(" ").map(Number));

numberArrays.forEach((pair) => {
  if (pair[1] % pair[0] === 0) {
    console.log(msg.FACTOR);
    return;
  } else if (pair[0] % pair[1] === 0) {
    console.log(msg.MULTIPLE);
    return;
  }

  console.log(msg.NEITHER);
});
