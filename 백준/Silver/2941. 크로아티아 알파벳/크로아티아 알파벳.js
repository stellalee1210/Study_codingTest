const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let str = input[0];
const croatianWords = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

croatianWords.forEach((word) => {
  str = str.replaceAll(word, ",");
});

const answer = str.split("").length;
console.log(answer);
