const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const [totalMoney, totalCount, ...shoppingList] = [Number(input[0]), Number(input[1]), ...input.slice(2)]
let checkPrice = 0;
for(const item of shoppingList){
    const [price, count] = item.trim().split(' ').map(Number);
    checkPrice+= price * count;
}

console.log(checkPrice === totalMoney? 'Yes' : 'No')