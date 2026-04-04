const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
input.shift();

const set = new Set(input);
const wordArray = [...set.values()];
const sortedWordArray = wordArray.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;

    for (let i = 0; i < a.length; i++) {
        if (a[i].charCodeAt() !== b[i].charCodeAt()) {
            return a[i].charCodeAt() - b[i].charCodeAt()
        }
    }
})

console.log(sortedWordArray.join('\n'))