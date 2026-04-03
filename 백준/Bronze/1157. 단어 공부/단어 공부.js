const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const words = input[0].split('').map(v => v.toLowerCase());

const wordCounts = [];
const set = new Set(words);
const setValues = [...set.values()];

setValues.forEach(v => {
  const count = words.filter(letter => letter === v).length;
  wordCounts.push([count, v])
});

const sortedWordCounts = wordCounts.sort((a, b) => b[0] - a[0]);
const answer = sortedWordCounts.filter(v => v[0] === sortedWordCounts[0][0])


console.log(answer.length === 1 ? answer[0][1].toUpperCase() : '?')
