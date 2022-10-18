console.log('0' == 0); // true
console.log('0' === 0); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log('true' == true); // false
console.log('true' === true); // false
// 1. JSON에서 값을 가져올 때 true 문자열로 가져와서 error가 난 적이 있음
// 2. JSON에서 값을 가져올 때 true가 True로 되어 있어 error가 난 적이 있음
console.log(0 == ''); // 주의 : true
console.log(0 === ''); // 주의 : false

console.log(false == ''); // 주의 : true
console.log(false === ''); // 주의 : false

console.log(false == null); // 주의 : false
console.log(false === null); // 주의 : false

console.log(false == undefined); // 주의 : false
console.log(false === undefined); // 주의 : false

// 아래 내용이 많아서 별도 파일로 분리하여 설명해드리겠습니다.
console.log(NaN == NaN); // 주의 : false
console.log(NaN === NaN); // 주의 : false

function truthyAndFalsy(value) {
  return !!value;
}

console.log(truthyAndFalsy([])); // true
console.log(truthyAndFalsy({})); // true
console.log(truthyAndFalsy('')); // false
console.log(truthyAndFalsy(null)); // false
console.log(truthyAndFalsy(undefined)); // false
console.log(truthyAndFalsy(NaN)); // false
console.log(truthyAndFalsy(Infinity)); // true

console.log(truthyAndFalsy(-100)); // true
console.log(truthyAndFalsy('hello')); // true
console.log(truthyAndFalsy()); //

console.log('----------------------');

console.log('드모르간 법칙');

// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 10; i++) {
  if (!(i % 3 == 0 || i % 5 == 0)) {
    console.log(i);
  }
}

for (let i = 0; i < 10; i++) {
  if (!(i % 3 == 0) && !(i % 5 == 0)) {
    console.log(i);
  }
}

// or : ||
// and : &&
const x = 0;
const y = 0;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

//
console.log([] == ![]); // true
console.log([] == 0);

// 1. 빈 array는 비교 구문이 나왔을 때 자바스크립트 엔진에 의해 강제로 숫자로 형변환 된다
console.log(0 == ![]);

// 2. ![] == false 입니다
console.log(0 == false);

// 3. false는 0으로 평가됩니다
console.log(0 == 0);
