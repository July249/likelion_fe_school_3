// 삼항 연산자 (Ternary Opr)
// 조건식 ? 참인 경우 실행되는 표현식 : 거짓인 경우 실행되는 표현식
// 주의! 삼항 연산자를 3개 이상 중첩하여 사용하는 것은 좋지 않은 습관이다

let item = true ? 100 : 200;
console.log(item);

let price = 7000;
// const msg = price > 6000 ? 'too expensive!' : "it's cheap!";
// console.log(msg); // too expensive

let msg =
  price > 6000
    ? 'too expensive'
    : price > 4000
    ? 'That is normal'
    : 'too cheap!';

console.log(msg);
