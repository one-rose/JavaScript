/*
for (let i = 2; i <= 9; i++) {
    // 구현 필요
}
output
2 x 1 = 2
...
9 x 9 = 81
*/


// 내가 짠 코드
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}


// 강사님이 짜신 코드
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}