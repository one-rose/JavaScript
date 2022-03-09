/*
// Syntax
for (variable of iterable) {
    //code block to be executed
}
*/


//Example
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x;
    console.log(x) // output: J \n a \n ... t
}