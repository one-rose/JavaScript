/*
const UNTIL_NUM = 10;
let sum = 0;

// 구현 필요

// 0 ~ 10: 10 8 6 4 2 -> 30
console.log(sum); // output;
*/

const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
    if (i % 2 == 0) sum += i;
}

// 0 ~ 10: 10 8 6 4 2 -> 30
console.log(sum); // output : 30
