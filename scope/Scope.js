let x = 1;
let y = 2;

console.log(x); // output : 1
console.log(y); // output : 2
 {
     // local scoper
     let x = 3;
     let y = 4;
     console.log(x); // output : 3
     console.log(y); // output : 4
 }

 function scope() {
     let x = 5;
     let y = 6;
     console.log(x); // output : 5
     console.log(y); // output : 6
 }

 console.log(x); // output : 1
 console.log(y); // output : 2