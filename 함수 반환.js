// return 후 코드는 수행되지 않으며, default return value는 undefined

function add(x, y) {
    return x + y;
    console.log("hello!"); // 미 수행 코드
}

function dummy() {}

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(add(10, 20)); // output: 30
console.log(dummy()); // output: undefined
console.log(checkAge(14)); // output: false
console.log(checkAge(20)); // output: true