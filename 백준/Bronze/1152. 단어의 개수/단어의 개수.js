const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const words = input[0].trim();
if (words.length === 0) {
  console.log(0);
} else {
  console.log(words.split(" ").length);
}
