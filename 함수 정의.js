/* 1. 함수 선언식(Function Declarations)
function func (arg1, arg2, ...argN) {
    expression;
} // 처음에는 함수 선언식을 사용하는 것이 좋다.
*/
function add(x, y) {
    return x + y;
}

/* 2. 함수 표현식(Function Expressions)
const func = function (arg1, arg2, ...argN) {
    expression;
}
*/
const add = function (x, y) {
    return x + y;
};

/*3. 화살표 함수 (Arrow Function)
const func = (arg1, arg2, ...argN) => expression;
*/
const add = (x, y) => x + y;