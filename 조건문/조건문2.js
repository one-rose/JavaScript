let age = 20;

// 조건문 : if-else
if (age < 19) {
    msg = "The user is not an adult.";
} else {
    msg = "The user is an adult.";
}

console.log(msg); // output : The user is an adult.

// 조건문 : 3항 연산자
msg_another = age < 19 ? "The user is not an adult." : "The user is an adult.";
console.log(msg_another); // output : The user is an adult.