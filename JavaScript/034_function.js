//////////////함수의 구조/////////////////

// 파선아실
/* function 안녕(파라미터){
  console.log(파라미터)
  console.log('hello world')
  return 100
}

let 아규먼트 = 1000
안녕(아규먼트)
console.log(안녕(아규먼트) + 안녕(아규먼트)) */

/*
console.log('hello world')
hello world
undefined

console.log(console.log('hello world'))
hello world
undefined
undefined
*/

// 파선아실
/* function 안녕(){
  console.log('hello')
  // return undefined가 생략되어 있습니다.
}

안녕()
console.log(String(안녕()) + String(안녕()))

// 파선아실
// return은 반환
function 안녕(){
  console.log('hello')
  return 10
}

안녕()
console.log(String(안녕()) + String(안녕())) */

// 파선아실
/* function 안녕(){
  console.log('hello')
  // return undefined
  return
}

안녕()
console.log(String(안녕()) + String(안녕()))


function 안녕(){
  console.log('hello')
  console.log('hello')
  console.log('hello')
  return
  console.log('hello')
  console.log('hello')
  console.log('hello')
}

안녕() */

// 질의응답
/* function 안녕(){
  console.log('hello')
  console.log('hello')
  console.log('hello')
  if (특정조건){
      return 100
  }
  else {
      console.log('hello')
      console.log('hello')
      console.log('hello')
      return 1000
  }
  return
  // 아래 코드는 실행하지 않습니다.
  .
  .
  .
  .
  .
} */

// console.log(안녕())

// console.log(String(console.log('hello')) + String(console.log('hello'))) // undefinedundefined

// 이렇게 작성하시면 안됩니다.
/* function sum(a, b) {
  return a * b
}

console.log(sum(10, 20)) */

//////////////함수를 사용하는 이유/////////////////

// 1. 재사용성 -> 재사용하지 않을 코드는 함수로 정의하나요? -> 가능하면 함수로 만드는 것을 권합니다.
// 2. 유지보수 -> 3번 사항 + 변수의 스코프 제한
// 3. 구조 파악이 용이하다.

// 참고만
// 4. 추상화로 개발하는 것이 객체지향 프로그래밍(OOP, Object Oriented Programming) 언어의 언어 철학에 맞다.

/*
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄
*/

//////////////함수의 다양한 형태/////////////////
/* function 함수1 (a, b, c){
  return a + b + c
} */

// 콘솔창의 기능이에요. 마지막 라인에 한하여 console.log()를 찍지 않아도 return값을 console창에 출력해줍니다.
/* 함수1(10, 20, 30) 
함수1(10, 20, 50) */

// 다음 실행 값은?
/* console.log(함수1(10, 20, 30))
console.log(함수1(10, 20, 50)) */

// 필요 이상의 아규먼트를 넣었을 때
// 함수1(10, 20, 30, 40) // Error를 뿜지 않습니다. 60

// 필요 이하의 아규먼트를 넣었을 때
/* 함수1(10, 20) */

/*
function 함수1 (a, b, c){
    return a + b + String(c)
}
함수1(10, 20) // '30undefined'
*/

// 구조분해할당을 이용한 아규먼트 처리
/* function 함수2(a, b, ...c){
    console.log(c)
    return Math.max(...c)
}

함수2('hello', 'world', 10, 20, 30, 40)

function 함수2([a, b], ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

함수2([1, 2], 10, 20, 30, 40) */

////// 동현님 글 //////
function 함수({ a = 2, b = 1, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(함수({ a: 20, b: 30, c: 10 }));
함수(); // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}
함수();

// X
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수();

// O
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수({}); // 이 코드를 축소한 코드가 위의 코드입니다.
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

////// 재귀 함수 //////

// 재귀함수 (top => down, 분할정복) <-> 반복문 (down => up)
function factorial(n) {
  if (n <= 1) {
    // 종료조건이 없으면 무한반복이 됩니다.
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(5);

let result = 1;
for (let i = 2; i < 6; i++) {
  result *= i;
}
console.log(result);

/*
5! = 5 * 4 * 3 * 2 * 1

                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

// sigma - 좋은 알고리즘은 아님 (재귀함수 설명을 위해 사용하였을 뿐임)
function sigma(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sigma(n - 1);
}

/* 
            n       n <= 1      return
sigma(5)    5       false       5 + sigma(4) = 15
sigma(4)    4       false       4 + sigma(3) = 10
sigma(3)    3       false       3 + sigma(2) = 6
sigma(2)    2       false       2 + sigma(1) = 3
sigma(1)    1       true        1
*/

// cf. 좋은 sigma 코드
function sigma(n) {
  return (n * (n + 1)) / 2;
}

// 문자열 뒤집기
function reverse(txt) {
  if (txt.length <= 1) {
    return txt;
  }
  return reverse(txt.slice(1)) + txt[0];
}
reverse('hello'); // olleh

// 지역변수와 전역 변수

// 블록레벨 스코프
if (true) {
  let x = 10;
  const y = 10;
}

console.log(x, y);

// 밖에서 선언된 x는 함수 내부에서도 접근이 가능합니다
let x = 100;
function xplut() {
  x += 10;
}

xplus();
console.log(x);

// 함수가 종료된 다음에는 선언된 변수는 휘발됩니다
function xplus() {
  let x = 100;
  x += 10;
}

xplus();
console.log(x);

// 함수 안에 함수
function a() {
  console.log('a 실행');
  function b() {
    console.log('b 실행');
  }
  b(); // 외부에서 접근 불가
}

a(); // a 실행

// 화살표 함수
function 함수1(x, y) {
  return x + y;
}

let 함수2 = (x, y) => x + y;

함수1.name; // 함수1
함수2.name; // 함수2

function 함수1(x, y) {
  let z = x + y;
  return z;
}

함수2 = (x, y) => {
  let z = x + y;
  return z;
};
