// 수학 점수 평균을 구하시오
let 수학점수 = [10, 99, 88, 85, 21, 35];

let sum = 0;
for (let i = 0; i < 수학점수.length; i++) {
  sum += 수학점수[i];
}
let avg = sum / 수학점수.length;
console.log(avg);

// 권고 - reduce
console.log(수학점수.reduce((a, b) => a + b, 0) / 수학점수.length);

let user = [
  {
    _id: '633e5b1711926cc42d1fbb4b',
    index: 0,
    guid: 'e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab',
    age: 28,
    name: 'Mai Montoya',
    gender: 'female',
  },
  {
    _id: '633e5b1718d6c001d2f771c7',
    index: 1,
    guid: '9b07b16c-7a4a-4152-83cf-fb64625f52fe',
    age: 22,
    name: 'Shelley Potts',
    gender: 'female',
  },
  {
    _id: '633e5b17fecc26a897aa2283',
    index: 2,
    guid: 'cfb29cc6-8381-4695-8c2f-0c273a9d33c2',
    age: 22,
    name: 'Hensley Flores',
    gender: 'male',
  },
  {
    _id: '633e5b17267fe16c24f00591',
    index: 3,
    guid: '6e189d90-0981-4086-9ee2-12242fda76d1',
    age: 20,
    name: 'Holmes Morrow',
    gender: 'male',
  },
  {
    _id: '633e5b17b30766b9c38594f5',
    index: 4,
    guid: 'f1505113-9383-4249-bbb3-0e5f8ea634b2',
    age: 25,
    name: 'Elisa Miller',
    gender: 'female',
  },
];

for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

let countMale = 0;
let countFemale = 0;
user.forEach((el) => {
  el.gender === 'female'
    ? (countFemale += 1)
    : el.gender === 'male'
    ? (countMale += 1)
    : 'Not defined';
});
console.log(countMale); // 2
console.log(countFemale); // 3

// 구구단
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// 재귀함수 비교할 for 문
// 1. 문자열 뒤집기
let txt = 'hello world';
let result = '';
for (let i = txt.length - 1; i >= 0; i--) {
  result += txt[i];
}

console.log(result);

result = '';
for (let i = 0; i < txt.length; i++) {
  result = txt[i] + result;
}

console.log(result);

// 2. 시그마
let sum2 = 0;
for (let i = 0; i < 101; i++) {
  sum2 += 1;
}
console.log(sum2);

// 3. 팩토리얼
let sum3 = 1;
for (let i = 1; i < 6; i++) {
  sum3 *= i;
}
console.log(sum3);

// 다음 입력된 문자열로 된 숫자들의 합을 구하라
/* 
input: '192837'
output: 1 + 9 + 2 + 8 + 3 + 7 = ? 
*/
let input = '12345';
let output = 0;
for (let i = 0; i < input.length; i++) {
  output += parseInt(input[i]);
}
console.log(output);

// 문자 카운팅
/* 
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
*/
let count = 0;
let str;
for (let i = 1; i < 10001; i++) {
  str = String(i);
  for (let j = 0; j < str.length; j++) {
    if (str[j] === '8') {
      count += 1;
    }
  }
}

console.log(count); // 4000

Array(100)
  .fill(0)
  .map((_, index) => (index + 1).toString());
Array(100)
  .fill(0)
  .map((_, index) => index + 1)
  .join('');

let x20 = Array(10000)
  .fill(0)
  .map((_, index) => index + 1)
  .join('');
let result20 = 0;
for (let i = 0; i < x20.length; i++) {
  if (x20[i] === '8') {
    result20 += 1;
  }
}

console.log(result20); // 4000
