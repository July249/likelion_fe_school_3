// 1-1 다음 값의 평균은?
// 1-2 다음 값의 분산은? (분산 === (각 값 - 평균)^2
const values = [10, 20, 30, 10, 20, 30, 40, 10];

const average1 = values.reduce((acc, cur, idx, { length }) => {
  return idx === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average1); // 21.25

const variation = values
  .map((val) => (val = (val - average1) ** 2) / values.length)
  .reduce((acc, cur) => acc + cur, 0);

console.log(variation); // 110.9375

// 2 다음 string의 평균값은?
const string = '5, 4, 10, 2, 5';

const average2 = string.split(', ').reduce((acc, cur, idx, { length }) => {
  return idx === length - 1
    ? (acc + parseInt(cur)) / length
    : acc + parseInt(cur);
}, 0);

console.log(average2); // 5.2

// 3 다음 array의 각 자리수 합은?
const array = [11, 22, 33, 111, 2];

function stringSum(num) {
  num += ''; // n = String(n);
  var sum = num
    .split('')
    .map((v) => (v = parseInt(v)))
    .reduce((acc, cur) => acc + cur, 0);
  return sum;
}

const totalSum = array
  .map((val) => stringSum(val))
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalSum);

// 4
const stringNum = '1000000';
// 4-1 반복문만 이용하여 숫자 단위 콤마 찍기
// const stringArr = stringNum.split('').join(', ');
// console.log(stringArr);
// 4-2 반복문만 사용하여 숫자 단위 콤마 없애기
// const withoutComma = stringArr.split(', ').join('');
// console.log(withoutComma);
// 4-3 문자열 뒤집기
function reveseString(s) {
  if (s.length <= 1) {
    return s;
  }
  return reveseString(s.slice(1)) + s[0];
}

console.log(reveseString(stringNum)); // 4321

// 5 로또 만들기
var lotto = [];
while (lotto.length < 6) {
  var num = Math.floor(Math.random() * 46);
  if (!lotto.includes(num)) {
    lotto.push(num);
  }
}
lotto.sort((a, b) => a - b);
console.log(lotto);
