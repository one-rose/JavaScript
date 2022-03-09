// break
let text = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) break;
    text = text + i; // text += i; 로도 쓸 수 있다.
}

console.log(text); // output : "012"




//continue
text = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) continue;
    text = text + i;
}

console.log(text); // output : "012456789"