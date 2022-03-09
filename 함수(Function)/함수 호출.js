// 1. default value
function print_add(x, y = 10) {
    console.log(x + y);
}
print_add(10, 20, 30); // output: 30
print_add(10, 20); // output: 30
print_add(10); // output: 20
print_add(); // output: NaN

//2. dynaic parameters
function print_min() {
    // console.log(arguments);
    console.log(arguments[0] - arguments[1]);
}
print_min(10, 20, 30); // output: -10
print_min(10, 20); // output: -10
print_min(10); // output: NaN
print_min(); // output: NaN
