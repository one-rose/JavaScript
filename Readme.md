함수

- 함수는 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합
- 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록 코드
- 함수는 정의 부분과 호출 부분으로 구성
- 함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내로 작성을 권장



함수 호출
- 자바 스크립트 함수는 매개 변수와 인수의 개수가 일치하는지 확인하지 않음
- ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정 가능


재귀 함수
- 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
- 재귀 함수는 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하틑 exit code가 필요
/*
function recurse()
    // function code
    recurse();
}

recurse();


콜백 함수
- 콜백 함수(Callback Function)란 다른 함수의 매개변수로 전달되어 수행되어지는 함수
- 고차 함수(Higher-order Function)란 매개변수를 통해 함수를 받아 호출하는 함수
/*
function callback_func() {                       // 2
    console.log("I'm callback function");
}
function higher_order_func(callback) {           // 1
    console.log("I'm higher-order function");
    callback();                                  // call 2
}
higher_order_func(callback_func);                // call 1



call by *
- call by value
    값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향이 미치지 않음.
    원시 타입(primitive type)을 매개 변수로 넘겼을 때 발생
/* 
let a = 1;
let add = function (b) {b = b + 1; }; // callee
add(a); // caller
console.log(a); // output: 1
*/
- call by reference
    주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
    객체 타입(object type)을 매개 변수로 넘겼을 때 발생
/*
var a = { v: 1 };
var add = function (b) { b.v = b.v + 1 }; // callee
add(a); // caller
console.log(a.v); // output: 2