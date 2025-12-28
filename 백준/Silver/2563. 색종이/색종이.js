const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const count = Number(input.shift());
const coords = input
  .map((coord) => coord.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

let graph = Array.from({ length: 100 }, () => Array(100).fill(0));

for (i = 0; i < count; i++) {
  const [cx, cy] = coords[i];
  for (let x = cx; x < cx + 10; x++) {
    for (let y = cy; y < cy + 10; y++) {
      graph[x][y] = 1;
    }
  }
}

let totalArea = 0;
graph.forEach((row) => {
  totalArea += row.filter((coord) => coord === 1).length;
});

console.log(totalArea);
