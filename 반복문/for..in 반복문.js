/*
// Syntax
for (key in object) {
    // code block to be executed
}

*/



// Example
const person = { fname: "John", lname: "Bob", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}
console.log(text); // output: JohnBob25