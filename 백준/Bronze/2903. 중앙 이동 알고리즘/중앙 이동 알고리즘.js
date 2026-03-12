const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const givenNumber = Number(input);

console.log((2 ** givenNumber + 1) ** 2);
