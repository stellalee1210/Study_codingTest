const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const count = Number(input.shift());
const exampleArr = input.map(Number);

const coins = Object.freeze({
  QUARTER: 25,
  DIME: 10,
  NICKEL: 5,
});

const answer = [];

exampleArr.forEach((number) => {
  const quarter = Math.floor(number / coins.QUARTER);
  const dime = Math.floor((number % coins.QUARTER) / coins.DIME);
  const nickel = Math.floor(
    ((number % coins.QUARTER) % coins.DIME) / coins.NICKEL,
  );
  const penny = number % coins.NICKEL;
  answer.push([quarter, dime, nickel, penny]);
});

answer.forEach((row) => {
  console.log(row.join(" "));
});
