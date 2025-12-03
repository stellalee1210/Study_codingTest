const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

input.forEach((str) => {
  console.log(str);
});
