// 집합
let s = new Set('abcdeeeeeeeeeeeeeeeee');

console.log(s);
console.log(s.size);

// 문제
회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근'];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let set = new Set(회사게시판);
console.log(set.size);
// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of set) {
  console.log(i, 회사게시판.filter((el) => el === i).length);
}

// cf. Map 은 갱신된다
let m3 = new Map();

m3.set('이호준', 1);
m3.set('이호준', 4);
m3.set('이호준', 9);

console.log(m3);

console.log('--------------');

s.add('f');

// Set 순환
for (let variable of s) {
  console.log(variable);
}

console.log('--------------');
// 값이 배열인 경우
let s2 = new Set('abcdeeeeeeeeeeeee'.split(''));
console.log(s2);

console.log('--------------');

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter((value) => b.has(value));
// 합집합
let union = new Set([...a].concat(...b));
// 차집합
let dif = new Set([...a].filter((x) => !b.has(x)));
