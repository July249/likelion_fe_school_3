function power(x) {
  function base(y) {
    return y ** x;
  }
  return base;
}

let power2 = power(2);

function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}

console.log(제곱(2)(3)); // 9 ??
// 제곱(2) === 승수
// 따라서 제곱(2)(3) === 승수(3) => 3 ** 2 === 9

function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
/* 
var add5 = function (z) {
  y = 100;
  return x + y + z;
}

add5 = makeAdder(5) 이므로 x = 5

add5 = function (z) {
  y = 100;
  return 5 + 100 + z;
}

console.log(add5(2));
=> add5(2) => z = 2

따라서 add5(2) = 5 + 100 + 2 = 107
*/

var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능
// 클로저 왜 씀?? => 정보의 은닉!!
/*
4. 왕유린 — 오늘 오후 3:49
생존주기와도 연관이 되나요?

답 : 함수의 생명주기로 보았을 때 클로저는 마치 내부 함수가 외부 함수보다 오래 살아있는 것처럼 보입니다. 여기서 내부 함수가 외부함수의 변수를 참고하고 있을 경우 '외부 함수는 생명주기가 끝났지만(실행 컨텍스트 스택에서는 제거됨)' 외부 변수는 메모리에서 해지되지 않습니다.(가비지컬렉터가 메모리를 회수하지 않습니다.) 폐쇠된(Closer) 공간에 접근하게 되는거죠.
*/