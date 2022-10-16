// this
// this의 값은 함수를 호출하는 방식에 따라 달라진다!

/* function b() {
  console.log('hello world');
}
b();
// window.b();

let test = {
  one: 1,
  two: 2,
  three: function () {
    console.log(this);
  },
};

test.three(); */

console.log('-----------');

/* this */
/* function sayName() {
  console.log(this.name);
}

var name = 'Hero';
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name: 'Peter Parker',
  sayName: sayName,
};

let bruce = {
  name: 'Bruce Wayne',
  sayName: sayName,
};

console.log(sayName());
console.log(peter.sayName());
console.log(bruce.sayName()); */

/* sayName() 함수를 실행했을 때와 
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */

console.log('-----------');

/* function a() {
  console.log(this.name);
  function b() {
    console.log(this.name);
  }
  b();
}
a(); */

/* function a() {
  console.log(this);
  function b() {
    console.log(this);
  }
  b();
}
a(); */

console.log('-----------');

/* this 사용 예시 */
/* let 호텔1 = [
  {
    이름: '하나호텔',
    위치: '제주도 제주시 001',
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '둘호텔',
    위치: '제주도 제주시 002',
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '셋호텔',
    위치: '제주도 제주시 003',
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔1[0].남은방의개수());
console.log(호텔1[1].남은방의개수());
console.log(호텔1[2].남은방의개수());

function 잔여룸() {
  return this.방의개수 - this.예약자수;
}

let 호텔2 = [
  {
    이름: '하나호텔',
    위치: '제주도 제주시 001',
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: 잔여룸,
  },
  {
    이름: '둘호텔',
    위치: '제주도 제주시 002',
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: 잔여룸,
  },
  {
    이름: '셋호텔',
    위치: '제주도 제주시 003',
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: 잔여룸,
  },
  {
    이름: '넷호텔',
    위치: '제주도 제주시 004',
    가격: { A: 50000, B: 30000, C: 10000 },
    방의개수: 100,
    예약자수: 40,
    남은방의개수: 잔여룸,
  },
];

console.log(호텔2[0].남은방의개수());
console.log(호텔2[1].남은방의개수());
console.log(호텔2[2].남은방의개수());
console.log(호텔2[3].남은방의개수());

 */

console.log('-----------');
