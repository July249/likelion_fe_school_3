/* let value = [10, 1, 100, 200, 300, 10];
let value2 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

Object.keys(value);
Object.keys(value2); */

/* for (let i in value2) {
  // for of로 순회를 돌 수가 없음
  console.log(i);
} */

/* for (let i of value2) {
  // of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것입니다. -> error
  console.log(i);
} */

/* Object.entries(value);
Object.entries(value2);

for (let i of Object.entries(value2)) {
  console.log(i);
}

for ([i, j] of Object.entries(value2)) {
  console.log(`key는 ${i}이고, value는 ${j}입니다.`);
}

for ([i, j] of [
  [10, 20],
  [30, 40],
]) {
  console.log(`${i}, ${j}`);
}

for ([i, j] of [
  [10, 20, 30],
  [30, 40, 50],
]) {
  console.log(`${i}, ${j}`); // 30과 50을 받지 못합니다
}

for ([i, j, ...k] of [
  [10, 20, 30, 1, 2],
  [30, 40, 50, 1],
]) {
  console.log(`${i}, ${j}, ${k}`);
}

for ([i, j, ...k] of [
  [10, 20, 30, 1, 2],
  [30, 40, 50, 1],
]) {
  console.log(`${i}, ${j}, ${k}`);
} */

// 일반 변수 선언의 구조분해 할당
/* let a, b, c;
[a, b] = [10, 20];
console.log(a, b); // 10 20

let one, two, three;
[one, two, three] = '010-1234-5678'.split('-');
console.log(one, two, three);

let one1, two1, three1, four1;
[one1, two1, three1, ...four1] = '010-1234-5678-9012-01-02'.split('-');
console.log(one1, two1, three1, four1); */

// data = [10, 20, 30, 40, 50];

// 문제 1
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
// [a, ...b, c] = [10, 20, 30, 40, 50] // (X)
// [a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]]; // (O)
// console.log(a, b, c);
// 문제 2
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
// [...a, b, c] = [10, 20, 30, 40, 50] // (X)
// [a, b, c] = [[data[0], data[1], data[2]], data[3], data[4]]; // (O)
// console.log(a, b, c);
// 문제 3
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20 c에는 30, 40, 50을 할당해보세요.
// [a, b, ...c] = [10, 20, 30, 40, 50]; // (O)
// console.log(a, b, c); // 10 20 [30, 40, 50]

// 스프레드 용법으로 구조분해 할당을 하는 것은 마지막에만 사용할 수 있다

/* let data = {
  name: 'james',
  age: 10,
  money: 100,
  company: 'weniv',
};

let { name, age } = data;
console.log({ name, age });

let rest;
{ name, age, ...rest } = data;
console.log({ name, age, ...rest });
 */

// RORO 기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용합니다

// let a = [10, 20, 30];
/* a.push(100);
console.log(a);
a.unshift(1000);
console.log(a); */

// a = [1000, ...a, 100];
// aconsole.log(a);

let a = [1, 2, 3];
let b = [10, 20, 30];
console.log([...a, ...b]);

let str = 'hello world';
console.log([str]);
console.log([...str]);

let z = '!'.repeat(10);
console.log(z);

z = [...'!'.repeat(10)];
console.log(z);
