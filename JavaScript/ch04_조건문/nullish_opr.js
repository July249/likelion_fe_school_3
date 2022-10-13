// nullish 연산자
// a ?? b
// a가 null도 아니고 undefined가 아니면 b 그 외의 경우는 c
/* 
let firstName = null;
let lastName = null;
let nicName = '바이올렛';
console.log(firstName ?? lastName ?? nicName ?? '익명의 사용자'); // 바이올렛
 */
let a = 10;
let b = 20;
let c = 30;

// let d = a ?? b ?? c;
// console.log(d); // 10

let d = c ?? b ?? a;
console.log(d); // 30

let e;
let f;
let g;

d = e ?? f ?? g;
console.log(d); // undefined

// practical example
let name;
let nicName = 'licat';
let userName = name ?? nicName ?? 'UserId';
console.log(userName);

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
