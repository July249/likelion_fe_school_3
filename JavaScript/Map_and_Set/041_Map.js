let m1 = new Map();

m1.set('하나', 1)
  .set('둘', 2)
  .set('셋', 3)
  .set('넷', 4)
  .set(true, '참')
  .set([1, 2], 'really?');

console.log(m1);

console.log(m1.get('하나')); // 1
console.log(m1.get(true)); // 참 // object에서는 가능하지 않습니다.
console.log(m1.get([1, 2])); // undefined // 이렇게는 호출이 불가
console.log('-----------');
/* 
Python

x = [1, 2]
id(x)

14007390633396664

y = [1, 2]
id(y)

14007390633395744

=> x == y // true
=> x is y // false

JavaScript

x = [1, 2]
y = [1, 2]

=> x == y // false
=> x === y // true 
*/

let m2 = new Map();
let test = [1, 2];

m2.set(test, 'really?').set([1, 2], 'really?');

console.log(m2);
console.log(m2.get([1, 2])); // undefined // 이렇게는 호출이 불가 (왜냐하면 서로 다른 [1, 2]이기 때문이다)
console.log(m2.get(test)); // really?

// Map에 값이 있는지 확인하기
console.log(m1.has('하나')); // true

// Map에 있는 값을 제거하기
m1.delete('하나');
console.log(m1.has('하나')); // false

// size 구하기
console.log(m1.size); // 5

console.log('-----------');
// Map 생성
// 1. Map으로 변환
let data1 = new Map([
  ['one', 1],
  ['two', 2],
]); // O
let data2 = new Map(Object.entries({ one: 1, two: 2 })); // O
// let data3 = new Map({ one: 1, two: 2 }); // X
// let data4 = new Map('hello world') // X
// let data5 = new Map([10, 20, 30, 40]) // X

// Map의 강점 -> 직접 순회가 가능하다
let data6 = { one: 1, two: 2 };
/* for (const i of data6) {
  console.log(i);
}  => 순회가 안됨!
*/
for (const i of Object.entries(data6)) {
  console.log(i);
}

let map = new Map();

map
  .set('하나', 1) // 메서드 체이닝
  .set('둘', 2)
  .set('셋', 3)
  .set('넷', 4);

for (const i of map) {
  console.log(i);
}

for (const [i, j] of map) {
  console.log(i, j);
}
console.log('----- keys, values, entries------');
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

console.log('-----------');
// Map - Object 간의 형변환
// 2가지 방법
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(map); // 잘 사용되지 않음

// 맵과 오브젝트 100만게 순회 성능 테스트
